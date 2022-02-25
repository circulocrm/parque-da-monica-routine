// import axios from 'axios';
import express, { Request, Response } from 'express';

const app = express();

// async function teste() {
//   await axios.post('https://mcv3m3hyqxgpzlvzfp755cxp1250.auth.marketingcloudapis.com//v2/token', {
//     grant_type: 'client_credentials',
//     client_id: '1xscr6ywz41wqdrr6yq2oyzg',
//     client_secret: '1CLWxn0V4FrS4M0X0OIQvJZz',
//   });
// }

app.get('/', (request: Request, response: Response): Response => {
  try {
    // teste();
    return response.status(200).json({ message: 'It is working' });
  } catch (error) {
    if (error instanceof Error) return response.status(500).json({ message: error.message });
    return response.status(500).json({ message: 'Unexpected error' });
  }
});

export default app;
