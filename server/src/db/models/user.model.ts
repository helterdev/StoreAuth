import mongoose, { Schema, model } from 'mongoose';
//creamos el esquema para guardar datos en la db

const UserSchema = new Schema({
  username: { type: String, required: true, trim: true },
  email: { type: String, required: true, trim: true, unique: true },
  password: { type: String, required: true },
},
{
  timestamps: true
});

export const UserModel = model('User', UserSchema);
