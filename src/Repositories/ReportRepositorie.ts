import ILog from '../Entities/Log';

/* eslint-disable no-unused-vars */
export interface IReportRepository {
  getLogs(): Promise<void>;
  addLog(log: ILog): Promise<void>;
  isConnected(): Promise<boolean>;
  handleConnect(connect?: boolean): Promise<boolean>;
}
