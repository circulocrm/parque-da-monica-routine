import MongoDBRepository from '../../Repositories/implementation/MongoDBRepository';

describe('Repository implementation', () => {
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

    expect(await mongoRepository.getLogs()).toEqual([]);
  });
});
