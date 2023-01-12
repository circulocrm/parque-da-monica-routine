import axios, { AxiosInstance } from 'axios';
import DataObject from '../../utils/DataObject';
import IDataProvider from '../Index';
import { DataTypes } from '../types/dataTypes';

export default class APIParqueDaMonicaDataProvider implements IDataProvider {
  private instance: AxiosInstance;

  constructor() {
    this.instance = axios.create({
      baseURL: 'http://192.168.160.12:3050/api/v1/',
    });
  }

  async getData(dataType: DataTypes): Promise<DataObject> {
    this.instance.defaults.headers.common['x-access-token'] = await this.getAuthToken();
    const {
      startDate,
      endDate,
    } = this.getDate();
    switch (dataType) {
      case 'clientes': {
        const { data } = await this.instance.post('/cliente', {
          consulta: '',
          data: startDate,
          datafinal: endDate,
        });
        return new DataObject(dataType, data);
      }

      case 'venda': {
        const { data } = await this.instance.post('/vendas', {
          consulta: '',
          data: startDate,
          datafinal: endDate,
        });
        return new DataObject(dataType, data);
      }

      case 'calendario': {
        const { data } = await this.instance.post('/calendario', {
          consulta: '',
          data: startDate,
          datafinal: endDate,
        });
        return new DataObject(dataType, data);
      }

      case 'catraca': {
        const { data } = await this.instance.post('/catraca', {
          consulta: '',
          data: startDate,
          datafinal: endDate,
        });
        return new DataObject(dataType, data);
      }

      case 'contatos': {
        const { data } = await this.instance.post('/contatos', {
          consulta: '',
          data: '2014-12-22 23:59:59',
          datafinal: endDate,
        });
        console.log('content length: ', data.length);
        return new DataObject(dataType, data);
      }

      default:
        return new DataObject('', []);
    }
  }

  private getDate(): {
    startDate: string;
    endDate: string;
    } {
    const currentDate = new Date();

    const previousDay = new Date(currentDate.getTime() - 24 * 60 * 60 * 1000);

    const startDate = new Date(previousDay).setHours(0, 0, 0, 0);

    const endDate = new Date(previousDay).setHours(20, 59, 59, 999);

    const s = new Date(startDate).toISOString().substring(0, 19).split('T')
    const e = new Date(endDate).toISOString().substring(0, 19).split('T')

    return {
      startDate: s.join(' '),
      endDate: e.join(' '),
    };
  }

  private async getAuthToken(): Promise<string> {
    const { data } = await this.instance.post('/login', {
      login: 'marketing',
      password: 'OyViUH0ViKmqH8WDhkAQfcp0orISKYuINJwNugki',
    });

    return data.token;
  }
}
