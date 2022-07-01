import mongoose from 'mongoose';
import app from './app';
import transferDataUseCase from './UseCases/TransferUseCase';

require('dotenv').config();

declare const process: {
  env: {
    CONNECTIONSTRING: string
    PORT: number
  }
};

mongoose.connect(process.env.CONNECTIONSTRING)
  .then(() => {
    app.emit('Conectado');
  })
  .catch((e) => console.log(e));

function padTo2Digits(num: Number) {
  return num.toString().padStart(2, '0');
}

function formatDate(date: Date) {
  return (
    `${[
      date.getFullYear(),
      padTo2Digits(date.getMonth() + 1),
      padTo2Digits(date.getDate()),
    ].join('-')
    } ${[
      padTo2Digits(date.getHours()),
      padTo2Digits(date.getMinutes()),
      padTo2Digits(date.getSeconds()),
    ].join(':')}`
  );
}

const executeAPI = async () => {
  setInterval(async () => {
    transferDataUseCase.execute();
    console.log(formatDate(new Date()));
  }, 1000 * 60 * 60 * 1)
}

app.on('Conectado', () => {
  app.listen(process.env.PORT || 3333, async () => {
    console.log('http://localhost:3333')
    await executeAPI();
  });
});
