import { Schema, model } from 'mongoose';
import logSchemma from './LogSchemma';

const ReportSchemma = new Schema({
  connected: { type: Boolean, required: true },
  logs: [logSchemma],
})

const ReportModel = model('Report', ReportSchemma);

export default ReportModel;
