/* eslint-disable no-unused-vars */
import ILog from '../../Entities/Log';

export type throwErrorEmailProps = {
  error: string;
  tableName: string;
  date: string;
}

export default interface ISFMCProvider {
  addToTable(tableKey: string, tableData?: {}): Promise<ILog>;
  throwErrorEmail(props: throwErrorEmailProps): Promise<void>;
}
