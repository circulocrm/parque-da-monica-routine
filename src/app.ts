import express, { Request, Response } from 'express';
// import transferDataUseCase from './UseCases/TransferUseCase';
const path = require('path');

const app = express();
app.use(express.static(path.resolve(__dirname, 'public')));

// const transferData = async () => {
//   await transferDataUseCase.execute();
// }

app.get('/', (request: Request, response: Response): void => response.render('index'));

app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'ejs');

export default app;
