// import axios from 'axios';
import axios from 'axios';
import express, { Request, Response } from 'express';

const app = express();
const getData = async () => {
  const instance = axios.create({
    baseURL: 'http://192.168.160.12:3050/api/v1/',
  });
  instance.defaults.headers.common['x-access-token'] = '9efa15579700d0c3460581bf2b795170af04997becfd599c28703748581ee10596ec6dc36d25ce234b8038ee881d1b4c73c5d6afbf7c1cb15865fb9869e61fbb2ff09e.09526340899a955b5b397369c466546d.9ee579479604d2c8063a95b667171512d76de70fd6e7509a373e0f0e0a5fb853c0a1.c9e31b8b9ac3262ffc694ce6f3b7ae52.e12df6d87e76d1ec69acc7415885ddf00bb601d778913c5219355b5f070328edcc6e';
  const response = await instance.post('/clientes/', {
    data: '2014-12-22 23:59:59',
  });
  console.log(response);
}

app.get('/', (request: Request, response: Response): Response => {
  try {
    getData();
    return response.status(200).json({ message: 'It is working' });
  } catch (error) {
    if (error instanceof Error) return response.status(500).json({ message: error.message });
    return response.status(500).json({ message: 'Unexpected error' });
  }
});

export default app;
