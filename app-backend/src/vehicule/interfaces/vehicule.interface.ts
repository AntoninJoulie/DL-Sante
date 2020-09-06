import { Document } from 'mongoose';

export interface Vehicule extends Document {
  readonly brand_name: string;
  readonly number_model: number;
  readonly user_id: string;
}
