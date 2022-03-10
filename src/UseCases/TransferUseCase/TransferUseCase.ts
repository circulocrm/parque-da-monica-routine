/* eslint-disable no-unused-vars */
import IDataProvider from '../../Providers/Data/Index';
import ISFMCProvider from '../../Providers/SFMCProvider';
import { IReportRepository } from '../../Repositories/ReportRepositorie';
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

        if (await this.sfmcProvider.addToTable(data.tableName, data.tableData)) {
          await this.reportRepository.addLog({
            connected: true,
            text: 'Dados transferidos com sucesso.',
            table: tableName,
            success: true,
            date: new Date().toISOString(),
          });
        } else {
          await this.reportRepository.addLog({
            connected: true,
            text: 'Falha na transfêrencia de dados.',
            table: tableName,
            success: false,
            date: new Date().toISOString(),
          });
        }
      } catch (error) {
        console.log(error);
      }
    });
  }
}
