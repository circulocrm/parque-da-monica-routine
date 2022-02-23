import express, { Request, Response } from 'express';

const app = express();

app.get('/', (request: Request, response: Response): Response => response.status(200).json({ message: 'It is working' }));

export default app;
