import axios, { AxiosInstance } from 'axios';
import DataObject from '../../utils/DataObject';
import IDataProvider from '../Index';
import { DataTypes } from '../types/dataTypes';

export default class APIParqueDaMonicaDataProvider implements IDataProvider {
  private instance: AxiosInstance;

  private start_date: string;

  constructor() {
    this.instance = axios.create({
      baseURL: 'http://192.168.160.12:3050/api/v1/',
    });
    this.start_date = '2022-06-25 23:59:59';
  }

  async getData(dataType: DataTypes): Promise<DataObject> {
    this.instance.defaults.headers.common['x-access-token'] = await this.getAuthToken();
    const finalDate = this.getDate();

    switch (dataType) {
      case 'clientes': {
        const { data } = await this.instance.post('/clientes', {
          consulta: '',
          data: this.start_date,
          datafinal: finalDate,
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
          datafinal: finalDate,
        });
        return new DataObject(dataType, data);
      }

      case 'catraca': {
        const { data } = await this.instance.post('/catraca', {
          consulta: '',
          data: this.start_date,
        });
        return new DataObject(dataType, data);
      }

      default:
        return new DataObject('', []);
    }
  }

  private getDate(): string {
    function padTo2Digits(num: Number) {
      return num.toString().padStart(2, '0');
    }

    return (
      `${[
        new Date().getFullYear(),
        padTo2Digits(new Date().getMonth() + 1),
        padTo2Digits(new Date().getDate()),
      ].join('-')
      } ${[
        padTo2Digits(new Date().getHours()),
        padTo2Digits(new Date().getMinutes()),
        padTo2Digits(new Date().getSeconds()),
      ].join(':')}`
    );
  }

  private async getAuthToken(): Promise<string> {
    const { data } = await this.instance.post('/login', {
      login: 'marketing',
      password: 'OyViUH0ViKmqH8WDhkAQfcp0orISKYuINJwNugki',
    });

    return data.token;
  }
}
