// import axios from 'axios';
import DataObject from '../../utils/DataObject';
import IDataProvider from '../Index';
import { DataTypes } from '../types/dataTypes';

export default class APIParqueDaMonicaDataProvider implements IDataProvider {
  private authToken: string;

  constructor() {
    this.authToken = '';
  }

  async getData(dataType: DataTypes): Promise<DataObject> {
    await this.getAuthToken();

    switch (dataType) {
      case 'clients':

        break;

      default:
        break;
    }

    return new DataObject(dataType, {});
  }

  private async getAuthToken(): Promise<void> {
    this.authToken = '';
  }
}
