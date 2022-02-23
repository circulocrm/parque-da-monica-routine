import request from 'supertest';
import app from '../app';

describe(' Home route "/" ', () => {
  it('should respond with a status 200', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
  });
});
