import ILog from '../../Entities/Log';
import LogModel from '../../scheema/LogModel';
import { IReportRepository } from '../ReportRepositorie';

export default class MongoDBRepository implements IReportRepository {
  async getLogs(): Promise<ILog[]> {
    return LogModel.find().sort({ created_at: -1 });
  }

  async getLastLog(): Promise<ILog> {
    const [log] = await LogModel.find().sort({ created_at: -1 }).limit(1) as ILog[];
    return log;
  }

  // eslint-disable-next-line no-unused-vars
  async handleConnect(): Promise<void> {
    const { connected } = await this.getLastLog();
    if (connected) {
      await this.addLog({
        text: 'Servidor VPN desconectado',
        connected: !connected,
        date: new Date().toISOString(),
      });
      return;
    }
    await this.addLog({
      text: 'Servidor VPN conectado',
      connected: !connected,
      date: new Date().toISOString(),
    });
  }

  async isConnected(): Promise<boolean> {
    const { connected } = await this.getLastLog();
    return connected;
  }

  // eslint-disable-next-line no-unused-vars
  async addLog(log: ILog): Promise<void> {
    await LogModel.create(log)
  }
}
