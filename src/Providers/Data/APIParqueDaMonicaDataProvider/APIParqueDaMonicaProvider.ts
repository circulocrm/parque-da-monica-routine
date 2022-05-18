import axios, { AxiosInstance } from 'axios';
import DataObject from '../../utils/DataObject';
import IDataProvider from '../Index';
import { DataTypes } from '../types/dataTypes';

export default class APIParqueDaMonicaDataProvider implements IDataProvider {
  private instance: AxiosInstance;

  private start_date: string;

  private final_date: string;

  constructor() {
    this.instance = axios.create({
      baseURL: 'http://192.168.160.12:3050/api/v1/',
    });
    this.start_date = '2018-01-22 23:59:59';
    this.final_date = '2022-18-05 23:59:59';
  }

  async getData(dataType: DataTypes): Promise<DataObject> {
    this.instance.defaults.headers.common['x-access-token'] = await this.getAuthToken();

    switch (dataType) {
      case 'clientes': {
        const { data } = await this.instance.post('/clientes', {
          consulta: '',
          data: this.start_date,
          datafinal: this.final_date,
        });
        return new DataObject(dataType, data);
      }

      case 'venda': {
        const { data } = await this.instance.post('/vendas', {
          consulta: '',
          data: this.start_date,
        });
        return new DataObject(dataType, data);
      }

      case 'calendario': {
        const { data } = await this.instance.post('/calendario', {
          consulta: '',
          data: this.start_date,
        });
        return new DataObject(dataType, data);
      }

      case 'catraca': {
        const { data } = await this.instance.post('/catraca', {
          consulta: '',
          data: this.start_date,
          datafinal: this.final_date,
        });
        return new DataObject(dataType, data);
      }

      default:
        return new DataObject('', []);
    }
  }

  private async getAuthToken(): Promise<string> {
    const { data } = await this.instance.post('/login', {
      login: 'marketing',
      password: 'OyViUH0ViKmqH8WDhkAQfcp0orISKYuINJwNugki',
    });

    return data.token;
  }
}
