import axios from 'axios';
import ISFMCProvider from '..';
import { DataTypes, TablesData } from '../../Data/types/dataTypes';

export default class SFMCProvider implements ISFMCProvider {
  private authToken: string;

  constructor() {
    this.authToken = '';
  }

  // eslint-disable-next-line no-unused-vars
  async addToTable(tableKey: DataTypes, tableData: TablesData): Promise<boolean> {
    try {
      if (!this.authToken) {
        this.authToken = await this.getToken();
      }

      axios.defaults.headers.common.Authorization = `Bearer ${this.authToken}`;
      axios.defaults.maxBodyLength = Infinity;
      axios.defaults.maxContentLength = Infinity;
      axios.defaults.maxRedirects = Infinity;

      this.arrSlice(tableData as [], 10000)
        .forEach(async (data) => {
          await axios.post(`https://mcv3m3hyqxgpzlvzfp755cxp1250.rest.marketingcloudapis.com/data/v1/async/dataextensions/key:${tableKey}/rows`, {
            items: data,
          });
        });

      return true;
    } catch (error) {
      if (error instanceof Error) console.log('SFMC Provider', error.message);
      return false;
    }
  }

  private arrSlice(arr: [], size: number): never[][] {
    const newArr = [];
    let i = 0;
    while (i < arr.length) {
      newArr.push(arr.slice(i, i + size));
      i += size;
    }
    return newArr.reverse();
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
