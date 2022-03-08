import axios from 'axios';
import ISFMCProvider from '..';

export default class SFMCProvider implements ISFMCProvider {
  async addToTable(tableKey: string, tableData?: {}): Promise<boolean> {
    try {
      const token = await this.getToken();
      if (!token) throw new Error('Missing token');

      axios.defaults.headers.common.Authorization = `Bearer ${token}`;

      const { status } = await axios.post(`https://mcv3m3hyqxgpzlvzfp755cxp1250.rest.marketingcloudapis.com/data/v1/async/dataextensions/key:${tableKey}/rows`, {
        items: [
          tableData,
        ],
      });
      if (status === 400) throw new Error('Bad request.');
      return true;
    } catch (error) {
      return false;
    }
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
