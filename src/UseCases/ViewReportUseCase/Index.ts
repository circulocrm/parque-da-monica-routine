import MongoDBRepository from '../../Repositories/Report/implementation/MongoDBReportRepository';
import ViewReportController from './ViewReportController';
import ViewReportUseCase from './ViewReportUseCase';

const mongoRepository = new MongoDBRepository();
const reportUseCase = new ViewReportUseCase(mongoRepository)

const viewReportController = new ViewReportController(reportUseCase);

export default viewReportController;
