import { Schema, model } from 'mongoose';

const LogSchemma = new Schema({
  connected: { type: Boolean, required: true },
  text: { type: String, required: true },
  date: { type: String, required: true },
  table: { type: String, required: true },
  success: { type: Boolean, required: true },
  created_at: { type: Date, required: false, default: Date.now() },
})

const LogModel = model('Report', LogSchemma);

export default LogModel;
