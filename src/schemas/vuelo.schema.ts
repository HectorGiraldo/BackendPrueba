import { Schema } from 'mongoose';

export const VueloSchema = new Schema(
  {
    desde: String,
    hacia: String,
    fecha_vuelo: Number,
    hora_vuelo: String,
    precio_manana: Number ,
    precio_tarde: Number,
    precio_find: Number,
});