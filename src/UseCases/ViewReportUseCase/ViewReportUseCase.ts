import { IReportRepository } from '../../Repositories/ReportRepositorie';
import { ViewReportDTO } from './ViewReportDTO';

export default class ViewReportUseCase {
  // eslint-disable-next-line no-useless-constructor
  constructor(
    // eslint-disable-next-line no-unused-vars
    private reportRepository: IReportRepository,
  // eslint-disable-next-line no-empty-function
  ) { }

  async execute(): Promise<ViewReportDTO> {
    const logs = await this.reportRepository.getLogs();
    const connected = await this.reportRepository.isConnected();
    const { date } = await this.reportRepository.getLastLog();

    return {
      connected,
      lastTransfer: new Date(date).toLocaleString('pt-BR'),
      logs: logs.reverse(),
    };
  }
}
