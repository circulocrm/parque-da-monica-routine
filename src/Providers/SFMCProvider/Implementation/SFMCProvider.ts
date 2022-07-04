import axios from 'axios';
import ISFMCProvider from '..';
import ILog from '../../../Entities/Log';
import { DataTypes, TablesData } from '../../Data/types/dataTypes';

export default class SFMCProvider implements ISFMCProvider {
  async addToTable(tableKey: DataTypes, tableData: TablesData): Promise<ILog> {
    try {
      const token = await this.getToken();

      axios.defaults.headers.common.Authorization = `Bearer ${token}`;
      axios.defaults.maxBodyLength = Infinity;
      axios.defaults.maxContentLength = Infinity;
      axios.defaults.maxRedirects = Infinity;

      this.arrSlice(tableData as [], 10000).map(async (result) => {
        await axios.post(`https://mcv3m3hyqxgpzlvzfp755cxp1250.rest.marketingcloudapis.com/data/v1/async/dataextensions/key:${tableKey}/rows`, {
          items: result,
        });
      });

      return {
        connected: true,
        text: 'Dados transferidos com sucesso.',
        table: tableKey,
        success: true,
        date: new Date().toISOString(),
      };
    } catch (error) {
      if (error instanceof Error) {
        return {
          connected: true,
          text: `SFMC Provider' ${error.message}`,
          table: tableKey,
          success: false,
          date: new Date().toISOString(),
        };
      }
      return {
        connected: true,
        text: 'SFMC Provider, Erro inesperado',
        table: tableKey,
        success: false,
        date: new Date().toISOString(),
      };
    }
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

  private async getToken(): Promise<string> {
    const { data } = await axios.post('https://mcv3m3hyqxgpzlvzfp755cxp1250.auth.marketingcloudapis.com/v2/token', {
      grant_type: 'client_credentials',
      client_id: '1xscr6ywz41wqdrr6yq2oyzg',
      client_secret: '1CLWxn0V4FrS4M0X0OIQvJZz',
    });

    return data.access_token;
  }
}
