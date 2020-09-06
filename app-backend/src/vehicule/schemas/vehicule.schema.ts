import * as mongoose from 'mongoose';

export const VehiculeSchema = new mongoose.Schema({
  brand_name: String,
  number_model: Number,
  user_id: String,
  user_first_name: String,
  user_last_name: String,
});
