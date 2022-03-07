/* eslint-disable no-unused-vars */
import { TablesData } from '../Data/types/dataTypes';

export default class DataObject {
  // eslint-disable-next-line no-useless-constructor
  constructor(
    protected TableName: string,
    protected TableData: TablesData,
  // eslint-disable-next-line no-empty-function
  ) { }

  get tableName(): string {
    return this.TableName;
  }

  get tableData(): TablesData {
    return this.TableData;
  }
}
