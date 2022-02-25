import { Schema } from 'mongoose';

const logSchemma = new Schema({
  text: { type: String, required: true },
  date: { type: String, required: true },
  created_at: { type: Date, required: false, default: Date.now() },
})

export default logSchemma;
