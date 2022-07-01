import APIParqueDaMonicaDataProvider from '../../Providers/Data/APIParqueDaMonicaDataProvider/APIParqueDaMonicaProvider';
import SFMCProvider from '../../Providers/SFMCProvider/Implementation/SFMCProvider';
import MongoDBRepository from '../../Repositories/Report/implementation/MongoDBReportRepository';
import TransferDataUseCase from './TransferUseCase';

const transferDataUseCase = new TransferDataUseCase(
  new SFMCProvider(),
  new MongoDBRepository(),
  new APIParqueDaMonicaDataProvider(),
  ['venda', 'calendario', 'clientes'],
);

export default transferDataUseCase;
