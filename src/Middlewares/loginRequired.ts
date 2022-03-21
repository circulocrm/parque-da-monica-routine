import { NextFunction, Request, Response } from 'express';

export default function LoginRequired(req: Request, res: Response, next: NextFunction) {
  if (!req.session.user) {
    req.flash('errors', 'Login requerido');
    return req.session.save(() => { res.redirect('/login') });
  }
  return next();
}
