import { Request, Response, Router } from 'express';
import viewReportController from '../UseCases/ViewReportUseCase/Index';

const homeRoute = Router();

homeRoute.get('/', (req: Request, res: Response) => viewReportController.handle(req, res))

export default homeRoute;
