/* eslint-disable no-unused-vars */
import ILog from '../../Entities/Log';

export type throwErrorEmailProps = {
  error: string;
  tableName: string;
  date: string;
  errorId?: string;
}

export type RecordEmailProps = {
  status?: string;
  tableName: string;
  date?: string;
  errorId?: string;
  message?: string;
  ref: string;
}

export default interface ISFMCProvider {
  addToTable(tableKey: string, tableData?: {}): Promise<ILog>;
  addToRecordTable(props: RecordEmailProps): Promise<void>;
  throwErrorEmail(props: throwErrorEmailProps): Promise<void>;
}
