import express, { Request, Response } from 'express';

const app = express();

app.get('/', (request: Request, response: Response): Response => response.json({ message: 'It is working' }));

export default app;
