import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Reserva } from '../../interfaces/reserva.interface';
import { ReservaSchema } from '../../schemas/reserva.schema';
import { Model } from 'mongoose';
import { CrearReservaDto } from '../../controllers/reservas/dto/crearReserva.dto';

@Injectable()
export class ReservasService {

    constructor(@InjectModel('Reserva')private readonly  reservaModel: Model<Reserva>) {}

    async getReservas() {
        return await this.reservaModel.find();
    }

    async getReserva(id: number) {
        return await this.reservaModel.find({"cedula": id});
    }

    async createReserva(reserva: CrearReservaDto) {
       
        const newReserva = new this.reservaModel( reserva );
        
        // tslint:disable-next-line: no-console
        return await newReserva.save();
    }
}
