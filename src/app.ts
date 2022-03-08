import express, { Request, Response } from 'express';
import transferDataUseCase from './UseCases/TransferUseCase';

const app = express();

const transferData = async () => {
  await transferDataUseCase.execute();
}

app.get('/', (request: Request, response: Response): Response => {
  try {
    transferData();
    return response.status(200).json({ message: 'It is working' });
  } catch (error) {
    if (error instanceof Error) return response.status(500).json({ message: error.message });
    return response.status(500).json({ message: 'Unexpected error' });
  }
});

export default app;
