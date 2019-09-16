import { Schema } from 'mongoose';

export const ReservaSchema = new Schema(
  {
      desde: String,
      hacia: String,
      fecha_vuelo: String,
      hora_vuelo: String,
      precio_manana: String,
      nombre: String,
      apellido: String,
      cedula: String,
      nacimiento: String,
      email: String,
      reserva: String,
});
