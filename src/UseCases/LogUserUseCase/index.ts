import MongoDBUserRepository from '../../Repositories/User/Implementation/MongoDBUserRepository';
import LogUserController from './LogUserController';
import LogUserUseCase from './LogUserUseCase';

const logUserController = new LogUserController(
  new LogUserUseCase(
    new MongoDBUserRepository(),
  ),
);

export default logUserController;
