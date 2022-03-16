import { NextFunction, Request, Response } from 'express';

export default function globalMiddleware(req: Request, res: Response, next: NextFunction) {
  res.locals.errors = req.flash('errors');
  return next();
}
