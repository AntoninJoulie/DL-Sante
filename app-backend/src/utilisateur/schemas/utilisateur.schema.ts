import * as mongoose from 'mongoose';

export const UtilisateurSchema = new mongoose.Schema({
  first_name: String,
  last_name: String,
});
