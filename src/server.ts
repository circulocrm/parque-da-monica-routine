// import axios from 'axios';
import mongoose from 'mongoose';
import flash from 'connect-flash'
import session from 'express-session';
import MongoStore from 'connect-mongo';

import app from './app';

require('dotenv').config();

declare const process: {
  env: {
    CONNECTIONSTRING: string
    PORT: number
  }
};

const sessions = session({
  secret: 'osdjcidsjcsi',
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7,
    httpOnly: true,
  },
  store: MongoStore.create({ mongoUrl: process.env.CONNECTIONSTRING }),
});
app.use(sessions);
app.use(flash());

mongoose.connect(process.env.CONNECTIONSTRING)
  .then(() => {
    app.emit('Conectado');
  })
  .catch((e) => console.log(e));

app.on('Conectado', () => {
  app.listen(process.env.PORT || 3333, () => console.log('http://localhost:3333'));
});
