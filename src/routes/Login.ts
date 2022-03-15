import { Request, Response, Router } from 'express';

const loginRoute = Router();

loginRoute.get('/login', (req: Request, res: Response) => res.render('loginScreen'))

export default loginRoute;
