import { Request, Response, Router } from 'express';
import logUserController from '../UseCases/LogUserUseCase';

const loginRoute = Router();

loginRoute.get('/login', (req: Request, res: Response) => res.render('loginScreen'))
loginRoute.post('/login-request', (req: Request, res: Response) => logUserController.handle(req, res))

export default loginRoute;
