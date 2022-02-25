import ILog from '../../Entities/Log';
import ReportModel from '../../scheema/ReportSchemma';
import { IReportRepository } from '../ReportRepositorie';

export default class MongoDBRepository implements IReportRepository {
  async getLogs(): Promise<ILog[]> {
    const logs = await ReportModel
      .findById({ _id: process.env.TABLE_ID, logs: 1, connected: 0 })
      .sort(-1);
    return logs;
  }

  // eslint-disable-next-line no-unused-vars
  async handleConnect(): Promise<void> {
    if (await this.isConnected()) {
      await ReportModel.updateOne({
        _id: process.env.TABLE_ID,
      }, {
        connected: false,
      });
      return;
    }

    await ReportModel.updateOne({
      _id: process.env.TABLE_ID,
    }, {
      connected: true,
    });
  }

  async isConnected(): Promise<boolean> {
    const connected = await ReportModel
      .findById({ _id: process.env.TABLE_ID, connected: 1, logs: 0 }) as boolean;
    return connected;
  }

  // eslint-disable-next-line no-unused-vars
  async addLog(log: ILog): Promise<void> {
    await ReportModel.updateOne({
      _id: process.env.TABLE_ID,
    }, {
      $push: {
        logs: log,
      },
    });
  }
}
