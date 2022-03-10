import ILog from '../../Entities/Log';

export interface ViewReportDTO {
  logs: ILog[];
  connected: boolean;
  lastTransfer: string;
}
