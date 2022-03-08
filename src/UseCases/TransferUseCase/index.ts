import APIParqueDaMonicaDataProvider from '../../Providers/Data/APIParqueDaMonicaDataProvider/APIParqueDaMonicaProvider';
import SFMCProvider from '../../Providers/SFMCProvider/Implementation/SFMCProvider';
import MongoDBRepository from '../../Repositories/implementation/MongoDBRepository';
import TransferDataUseCase from './TransferUseCase';

const transferDataUseCase = new TransferDataUseCase(
  new SFMCProvider(),
  new MongoDBRepository(),
  new APIParqueDaMonicaDataProvider(),
);

export default transferDataUseCase;
