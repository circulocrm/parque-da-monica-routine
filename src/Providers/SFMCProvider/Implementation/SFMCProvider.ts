import axios, { AxiosInstance } from 'axios';
import ISFMCProvider, { RecordEmailProps } from '..';
import ILog from '../../../Entities/Log';
import { DataTypes, TablesData } from '../../Data/types/dataTypes';

export default class SFMCProvider implements ISFMCProvider {
  private instance: AxiosInstance;

  constructor() {
    this.instance = axios.create({
      baseURL:
        'https://mcv3m3hyqxgpzlvzfp755cxp1250.rest.marketingcloudapis.com',
      maxBodyLength: Infinity,
      maxRedirects: Infinity,
      maxContentLength: Infinity,
    });
  }

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

  async throwErrorEmail(): Promise<void> {
    const instance = await this.getInstance();
    await instance.post('/interaction/v1/events', {
      ContactKey: 'joeverton.sousa@circulocrm.com.br',
      EventDefinitionKey: 'APIEvent-5fd47de6-4b6d-5147-b14e-1c859138225a',
      Data: {
        Email: 'joeverton.sousa@circulocrm.com.br',
        contactKey: Math.random(),
      },
    });
    await instance.post('/interaction/v1/events', {
      ContactKey: 'andre.volcov@circulocrm.com.br',
      EventDefinitionKey: 'APIEvent-5fd47de6-4b6d-5147-b14e-1c859138225a',
      Data: {
        Email: 'andre.volcov@circulocrm.com.br',
        contactKey: Math.random(),
      },
    });
  }

  async addToRecordTable(props: RecordEmailProps): Promise<void> {
    const instance = await this.getInstance();
    await instance.put(`data/v1/async/dataextensions/key:${props.ref}/rows`, {
      items: [props],
    });
  }

  private async getInstance(): Promise<AxiosInstance> {
    const token = await this.getToken();

    // const instance = axios.create({
    //   baseURL:
    //     'https://mcv3m3hyqxgpzlvzfp755cxp1250.rest.marketingcloudapis.com',
    //   maxBodyLength: Infinity,
    //   maxRedirects: Infinity,
    //   maxContentLength: Infinity,
    // });

    this.instance.defaults.headers.common.Authorization = `Bearer ${token}`;

    return this.instance;
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
