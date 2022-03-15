import express from 'express';
import {
  homeRoutes,
} from './routes/_Index';

const path = require('path');

const app = express();
app.use(express.static(path.resolve(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, 'views'));

app.use('/', homeRoutes);

export default app;
