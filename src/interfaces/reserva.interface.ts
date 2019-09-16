import { Document } from 'mongoose';

export interface Reserva extends Document {
      _id: string;
      desde: string;
      hacia: string;
      fecha_vuelo: string;
      hora_vuelo: string;
      precio_manana: number;
      nombre: string;
      apellido: string;
      cedula: string;
      nacimiento?: string;
      email: string;
      reserva?: string;
}
