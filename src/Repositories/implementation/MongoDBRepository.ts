import Log from '../../Entities/Log';
import LogModel from '../../scheema/LogSchemma';
import { IReportRepository } from '../ReportRepositorie';

export default class MongoDBRepository implements IReportRepository {
  async getLogs(): Promise<void> {
    const logs = await LogModel.find().sort(-1);
  }

  handleConnect(connect?: boolean): Promise<boolean> {

  }

  isConnected(): Promise<boolean> {

  }

  addLog(log: Log): Promise<void> {

  }
}
