import ILog from '../Entities/Log';

/* eslint-disable no-unused-vars */
export interface IReportRepository {
  getLogs(): Promise<ILog[]>;
  addLog(log: ILog): Promise<void>;
  isConnected(): Promise<boolean>;
  handleConnect(connect?: boolean): Promise<void>;
}
