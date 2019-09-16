import { Document } from 'mongoose';

export interface Vuelo extends Document {
    id?: number;
    desde: string;
    hacia: string;
    fecha_vuelo: string;
    hora_vuelo: string;
    precio_manana: number;
    precio_tarde: number;
    precio_find: number;
}
