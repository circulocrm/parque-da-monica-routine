/* eslint-disable no-unused-vars */
import IDataProvider from '../../Providers/Data/Index';
import ISFMCProvider from '../../Providers/SFMCProvider';
import { IReportRepository } from '../../Repositories/Report/ReportRepositorie';
import { DataTypes } from '../../Providers/Data/types/dataTypes';

export default class TransferDataUseCase {
  // eslint-disable-next-line no-useless-constructor
  constructor(
    private sfmcProvider: ISFMCProvider,
    private reportRepository: IReportRepository,
    private dataProvider: IDataProvider,
    private tables: DataTypes[],
    // eslint-disable-next-line no-empty-function
  ) { }

  async execute() {
    this.tables.forEach(async (tableName) => {
      try {
        const data = await this.dataProvider.getData(tableName);
        const result = await this.sfmcProvider.addToTable(data.tableName, data.tableData);
        await this.reportRepository.addLog(result);
      } catch (error) {
        if (error instanceof Error) {
          if (error.message === 'connect ETIMEDOUT 192.168.160.12:3050') {
            await this.sfmcProvider.throwErrorEmail();
          }

          await this.reportRepository.addLog({
            connected: true,
            text: `Transfer UseCase, ${error.message}`,
            table: tableName,
            success: false,
            date: new Date().toISOString(),
          });
        }
      }
    });
  }
}
