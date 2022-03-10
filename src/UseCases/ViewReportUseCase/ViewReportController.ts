/* eslint-disable no-unused-vars */
import { Request, Response } from 'express';
import ViewReportUseCase from './ViewReportUseCase';

export default class ViewReportController {
  // eslint-disable-next-line no-useless-constructor
  constructor(
    private reportUseCase: ViewReportUseCase,
    // eslint-disable-next-line no-empty-function
  ) { }

  async handle(req: Request, res: Response): Promise<void> {
    const report = await this.reportUseCase.execute();

    return res.render('index', { report });
  }
}
