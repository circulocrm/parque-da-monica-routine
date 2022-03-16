import { NextFunction, Request, Response } from 'express';

export default function LoginRequired(req: Request, res: Response, next: NextFunction) {
  if (!req.session.user) {
    req.flash('errors', 'Faça login para inserir serviços no sistema.');
    req.session.save(() => { res.redirect('/login/index') });
  }
  return next();
}
