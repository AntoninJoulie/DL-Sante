import { Document } from 'mongoose';

export interface Utilisateur extends Document {
  readonly first_name: string;
  readonly last_name: string;
}
