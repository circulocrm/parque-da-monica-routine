import ILog from '../../Entities/Log';

export default interface ISFMCProvider {
  // eslint-disable-next-line no-unused-vars
  addToTable(tableKey: string, tableData?: {}): Promise<ILog>;
  throwErrorEmail(): Promise<void>;
}
