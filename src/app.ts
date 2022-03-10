import express, { Request, Response } from 'express';
import viewReportController from './UseCases/ViewReportUseCase/Index';
// import transferDataUseCase from './UseCases/TransferUseCase';
const path = require('path');

const app = express();
app.use(express.static(path.resolve(__dirname, 'public')));

// const transferData = async () => {
//   await transferDataUseCase.execute();
// }

app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (req: Request, res: Response) => viewReportController.handle(req, res));

export default app;
