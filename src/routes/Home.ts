import { Request, Response, Router } from 'express';
import LoginRequired from '../Middlewares/loginRequired';
import viewReportController from '../UseCases/ViewReportUseCase/Index';

const homeRoute = Router();

homeRoute.get('/', LoginRequired, (req: Request, res: Response) => viewReportController.handle(req, res))

export default homeRoute;
