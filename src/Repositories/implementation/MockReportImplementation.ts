import ILog from '../../Entities/Log';
import { IReportRepository } from '../ReportRepositorie';

export default class MockReportImplementation implements IReportRepository {
  public logs: ILog[];

  public log: ILog;

  public connected: boolean;

  constructor() {
    this.connected = false;
    this.logs = [];
    this.log = {
      connected: false,
      text: '',
      success: true,
      table: '',
      date: new Date().toISOString(),
    };
  }

  async handleConnect(): Promise<void> {
    if (this.connected) this.connected = false;
    else this.connected = true;
  }

  async isConnected(): Promise<boolean> {
    return this.connected;
  }

  async getLogs(): Promise<ILog[]> {
    return this.logs;
  }

  async addLog(log: ILog): Promise<void> {
    this.logs.push(log)
  }
}
