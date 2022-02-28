/* eslint-disable no-underscore-dangle */
import mongoose from 'mongoose';
import MongoDBRepository from '../../Repositories/implementation/MongoDBRepository';
import LogModel from '../../scheema/LogModel';

describe('Repository implementation', () => {
  beforeAll(async () => {
    if (!process.env.MONGO_URL) throw new Error('Mongo Server unitialized!');

    await mongoose.connect(process.env.MONGO_URL);
  });

  afterAll(async () => {
    await mongoose.disconnect();
  });

  // it('Should return true when connected', async () => {
  //   const mongoRepository = new MongoDBRepository();
  //   await mongoRepository.handleConnect();

  //   expect(await mongoRepository.isConnected()).toBe(true);
  // });

  // it('Should return false when connected', async () => {
  //   const mongoRepository = new MongoDBRepository();

  //   await mongoRepository.handleConnect();
  //   await mongoRepository.handleConnect();

  //   expect(await mongoRepository.isConnected()).toBe(false);
  // });

  it('Should return empty array when has no logs', async () => {
    const mongoRepository = new MongoDBRepository();

    const logs = await mongoRepository.getLogs();

    expect(logs).toEqual([]);
  });
});
