/* eslint-disable no-unused-vars */
import IDataProvider from '../../Providers/Data/Index';
import ISFMCProvider from '../../Providers/SFMCProvider';
import { IReportRepository } from '../../Repositories/ReportRepositorie';

export default class TransferDataUseCase {
  // eslint-disable-next-line no-useless-constructor
  constructor(
    private sfmcProvider: ISFMCProvider,
    private reportRepository: IReportRepository,
    private dataProvider: IDataProvider,
    // eslint-disable-next-line no-empty-function
  ) { }

  async execute() {
    try {
      const data = await this.dataProvider.getData('clients');

      if (await this.sfmcProvider.addToTable(data.tableName, data.tableData)) {
        await this.reportRepository.addLog({
          connected: true,
          text: 'Dados transferidos com sucesso. Tabela cliente',
          date: new Date().toISOString(),
        });
      } else {
        await this.reportRepository.addLog({
          connected: true,
          text: 'Falha na transfêrencia de dados. Tabela cliente',
          date: new Date().toISOString(),
        });
      }
    } catch (error) {
      console.log(error);
    }
  }
}
