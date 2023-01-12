import mongoose from 'mongoose';
import app from './app';
import transferDataUseCase from './UseCases/TransferUseCase';
import { checkVPNConnection } from './Utils/ConnectToVPN';
import { scheduleFunction } from './Utils/scheduleFunction';

require('dotenv').config();

declare const process: {
  env: {
    CONNECTIONSTRING: string;
    PORT: number;
  };
};

mongoose
  .connect(process.env.CONNECTIONSTRING)
  .then(() => {
    app.emit('Conectado');
  })
  .catch((e) => console.log(e));

app.on('Conectado', () => {
  app.listen(process.env.PORT || 3333, async () => {
    console.log('http://localhost:3333');
    await checkVPNConnection();
    scheduleFunction(6, 30, async () => {
      await transferDataUseCase.execute();
    });
    scheduleFunction(14, 30, async () => {
      await transferDataUseCase.execute();
    });
    await transferDataUseCase.execute();
  });
});
