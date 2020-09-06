import * as mongoose from 'mongoose';

export const VehiculeSchema = new mongoose.Schema({
  brand_name: String,
  number_model: Number,
});
