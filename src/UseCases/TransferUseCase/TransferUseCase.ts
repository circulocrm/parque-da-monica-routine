/* eslint-disable no-unused-vars */
import IDataProvider from '../../Providers/Data/Index';
import ISFMCProvider from '../../Providers/SFMCProvider';
import { IReportRepository } from '../../Repositories/Report/ReportRepositorie';
import { DataTypes } from '../../Providers/Data/types/dataTypes';

type errorProps = Error & {
  response: {
    data: {
      msg: string;
      errorID: string;
    };
  };
};

export default class TransferDataUseCase {
  // eslint-disable-next-line no-useless-constructor
  constructor(
    private sfmcProvider: ISFMCProvider,
    private reportRepository: IReportRepository,
    private dataProvider: IDataProvider,
    private tables: DataTypes[], // eslint-disable-next-line no-empty-function, brace-style
  ) {}

  async execute() {
    this.tables.forEach(async (tableName) => {
      try {
        const data = await this.dataProvider.getData(tableName);

        data.tableData.forEach(async (obj) => {
          const result = await this.sfmcProvider.addToTable(
            obj.tableName,
            obj.tableData,
          );
          await this.reportRepository.addLog(result);
        });
        await this.sfmcProvider.addToRecordTable({
          date: new Date().toLocaleString('pt-br'),
          tableName,
          status: 'sucesso',
          errorId: '---',
          message: '---',
        });
      } catch (error) {
        const e = error as errorProps;

        await this.reportRepository.addLog({
          connected: true,
          text: `Transfer UseCase, ${e.message}`,
          table: tableName,
          success: false,
          date: new Date().toISOString(),
        });

        if (e.message === 'connect ETIMEDOUT 192.168.160.12:3050') {
          await this.sfmcProvider.throwErrorEmail({
            date: new Date().toISOString(),
            error: 'Servidor desconectado da VPN',
            tableName: '----------------------',
          });

          return;
        }

        await this.sfmcProvider.addToRecordTable({
          date: new Date().toLocaleString('pt-br'),
          tableName,
          status: 'erro',
          errorId: e.response.data.errorID,
          message: e.response.data.msg,
        });
      }
    });
  }
}
