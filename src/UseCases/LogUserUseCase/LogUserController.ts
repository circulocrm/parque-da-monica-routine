/* eslint-disable no-empty-function */
/* eslint-disable no-unused-vars */
/* eslint-disable no-useless-constructor */
import { Request, Response } from 'express';
import LogUserUseCase from './LogUserUseCase';

export default class LogUserController {
  constructor(
    private logUserUseCase: LogUserUseCase,
  ) { }

  async handle(req: Request, res: Response): Promise<void> {
    try {
      const { email, password } = req.body;
      const user = await this.logUserUseCase.execute({ email, password });

      req.session.user = user;
      req.session.save(() => res.redirect('/'));
    } catch (error) {
      if (error instanceof Error) {
        req.flash('errors', error.message)
      }
      req.session.save(() => res.redirect('/login'));
    }
  }
}
