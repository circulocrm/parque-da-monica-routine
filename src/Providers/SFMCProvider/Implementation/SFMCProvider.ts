import axios, { AxiosInstance } from 'axios';
import ISFMCProvider, { RecordEmailProps, throwErrorEmailProps } from '..';
import ILog from '../../../Entities/Log';
import { DataTypes, TablesData } from '../../Data/types/dataTypes';

export default class SFMCProvider implements ISFMCProvider {
  async addToTable(tableKey: DataTypes, tableData: TablesData): Promise<ILog> {
    try {
      const instance = await this.getInstance();

      await instance.post(`data/v1/async/dataextensions/key:${tableKey}/rows`, {
        items: tableData,
      });

      return {
        connected: true,
        text: 'Dados transferidos com sucesso.',
        table: tableKey,
        success: true,
        date: new Date().toISOString(),
      };
    } catch (error) {
      const e = error as Error;

      return {
        connected: true,
        text: `SFMC Provider, ${e.message}`,
        table: tableKey,
        success: false,
        date: new Date().toISOString(),
      };
    }
  }

  async throwErrorEmail(props: throwErrorEmailProps): Promise<void> {
    const instance = await this.getInstance();
    await instance.post('/interaction/v1/events', {
      ContactKey: 'fellipe.lorram@circulocrm.com.br',
      EventDefinitionKey: 'APIEvent-1a9a6a98-4ca3-f9cb-6350-69fd90ac29fb',
      Data: {
        Email: 'fellipe.lorram@circulocrm.com.br',
        contactKey: Math.random(),
        ...props,
      },
    });
  }

  async addToRecordTable(props: RecordEmailProps): Promise<void> {
    const instance = await this.getInstance();
    await instance.put(`data/v1/async/dataextensions/key:${props.ref}/rows`, {
      items: [props],
    });
  }

  private arrSlice(arr: [], size: number): never[][] {
    const newArr = [];
    let i = 0;
    while (i < arr.length) {
      newArr.push(arr.slice(i, i + size));
      i += size;
    }
    return newArr;
  }

  private async getInstance(): Promise<AxiosInstance> {
    const token = await this.getToken();

    const instance = axios.create({
      baseURL:
        'https://mcv3m3hyqxgpzlvzfp755cxp1250.rest.marketingcloudapis.com',
      maxBodyLength: Infinity,
      maxRedirects: Infinity,
      maxContentLength: Infinity,
    });

    instance.defaults.headers.common.Authorization = `Bearer ${token}`;

    return instance;
  }

  private async getToken(): Promise<string> {
    const { data } = await axios.post(
      'https://mcv3m3hyqxgpzlvzfp755cxp1250.auth.marketingcloudapis.com/v2/token',
      {
        grant_type: 'client_credentials',
        client_id: '1xscr6ywz41wqdrr6yq2oyzg',
        client_secret: '1CLWxn0V4FrS4M0X0OIQvJZz',
      },
    );

    return data.access_token;
  }
}
