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

const executeAPI = async () => {
  await transferDataUseCase.execute();
  setInterval(async () => { await transferDataUseCase.execute(); }, 1000 * 60 * 60 * 24)
}

app.on('Conectado', () => {
  app.listen(process.env.PORT || 3333, async () => {
    console.log('http://localhost:3333')
    await executeAPI();
  });
});
