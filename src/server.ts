import express, { Request, Response } from 'express';

const app = express();

app.get('/', (request: Request, response: Response): Response => {
  return response.json({ message: 'It is working' })
});

app.listen(3333);
