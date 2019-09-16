import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { CrearReservaDto } from './dto/crearReserva.dto';
import { ReservasService } from '../../services/reservas/reservas.service';
import { Reserva } from '../../interfaces/reserva.interface';


@Controller('reservas')
export class ReservasController {

    constructor( private readonly reservaService: ReservasService) {}

    @Post()
    CrearReserva(@Body()reserva: CrearReservaDto ): Promise<Reserva> {
         return this.reservaService.createReserva(reserva);
    }

    @Get()
    getReservas(): Promise<Reserva[]> {
        return this.reservaService.getReservas();
    }

    @Get(':id')
    getReserva(@Param('id') id: number) {
        // tslint:disable-next-line: radix
        return this.reservaService.getReserva( id );
    }
}
