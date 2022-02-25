import { Schema, model } from 'mongoose';

const logSchemma = new Schema({
  text: { type: String, required: true },
  date: { type: String, required: true },
  created_at: { type: Date, required: false, default: Date.now() },
})

const LogModel = model('logs', logSchemma);

export default LogModel;
