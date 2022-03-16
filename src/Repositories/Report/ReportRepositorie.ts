import ILog from '../../Entities/Log';

/* eslint-disable no-unused-vars */
export interface IReportRepository {
  getLastLog(): Promise<ILog>;
  getLogs(): Promise<ILog[]>;
  addLog(log: ILog): Promise<void>;
  isConnected(): Promise<boolean>;
  handleConnect(type: 'connect' | 'disconnect'): Promise<void>;
}
