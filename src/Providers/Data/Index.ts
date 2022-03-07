import DataObject from '../utils/DataObject';
import { DataTypes } from './types/dataTypes';

export default interface IDataProvider {
  // eslint-disable-next-line no-unused-vars
  getData(dataType: DataTypes): Promise<DataObject>;
}
