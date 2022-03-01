import ILog from '../../Entities/Log';
import LogModel from '../../scheema/LogModel';
import { IReportRepository } from '../ReportRepositorie';

export default class MongoDBRepository implements IReportRepository {
  async getLogs(): Promise<ILog[]> {
    return LogModel.find().sort({ created_at: -1 });
  }

  async getLastLog(): Promise<ILog> {
    const logs = await this.getLogs();
    const log = logs.slice(-1)[0];

    return log || {
      connected: false,
      text: 'Servidor VPN desconectado',
      date: new Date().toISOString(),
    };
  }

  // eslint-disable-next-line no-unused-vars
  async handleConnect(type: 'connect' | 'disconnect'): Promise<void> {
    switch (type) {
      case 'connect':
        await this.addLog({
          connected: true,
          text: 'Servidor VPN conectado',
          date: new Date().toISOString(),
        });
        return;

      case 'disconnect':
        await this.addLog({
          connected: false,
          text: 'Servidor VPN desconectado',
          date: new Date().toISOString(),
        })
        return;

      default:
        await this.addLog({
          connected: false,
          text: 'Servidor VPN desconectado',
          date: new Date().toISOString(),
        });
    }
  }

  async isConnected(): Promise<boolean> {
    const log = await this.getLastLog();

    return log.connected;
  }

  // eslint-disable-next-line no-unused-vars
  async addLog(log: ILog): Promise<void> {
    await LogModel.create(log)
  }
}
