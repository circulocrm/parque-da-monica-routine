import express, { Request, Response } from 'express';

const app = express();

app.get('/', (request: Request, response: Response): Response => response.json({ message: 'It is working' }));

app.listen(process.env.PORT || 3333);
