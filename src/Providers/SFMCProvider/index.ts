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
  ref: 'call-1' | 'call-2';
}

export default interface ISFMCProvider {
  addToTable(tableKey: string, tableData?: {}): Promise<ILog>;
  addToRecordTable(props: RecordEmailProps): Promise<void>;
  throwErrorEmail(props: throwErrorEmailProps): Promise<void>;
}
