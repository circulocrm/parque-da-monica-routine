import mongoose from 'mongoose';
import app from './app';
import MongoDBRepository from './Repositories/implementation/MongoDBRepository';

declare const process: {
  env: {
    CONNECTIONSTRING: string
    PORT: number
  }
};

require('dotenv').config();

mongoose.connect(process.env.CONNECTIONSTRING)
  .then(() => {
    app.emit('Conectado');
    try {
      const getData = async () => {
        const test = new MongoDBRepository();
        console.log(await test.getLogs());
      }
      getData()
    } catch (error) {
      console.log(error);
    }
  })
  .catch((e) => console.log(e));

app.on('Conectado', () => {
  app.listen(process.env.PORT || 3333, () => console.log('http://localhost:3333'));
});
