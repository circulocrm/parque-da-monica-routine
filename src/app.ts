import express from 'express';
import {
  homeRoutes,
  loginRoute
} from './routes/_Index';

const path = require('path');

const app = express();
app.use(express.static(path.resolve(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, 'views'));

app.use('/', homeRoutes);
app.use('/', loginRoute);

export default app;
