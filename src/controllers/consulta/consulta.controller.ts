import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { ConsultaVueloDto } from './dto/consultarVuelo.dto';
import { ConsultasService } from '../../services/consultas/consultas.service';
import { Vuelo } from '../../interfaces/vuelo.interface';

@Controller('consulta')
export class ConsultaController {

    constructor( private readonly consultaService: ConsultasService) {}

    @Get(':id')
    getCedula( @Param('id') id ): string {
        // console.log(id);
        return id;
    }

    @Get()
    getVuelos( ): Promise<Vuelo[]> {
        return this.consultaService.getVuelos();
    }

    @Post()
    CrearReserva(@Body()vuelo ): Promise<Vuelo[]> {
        return this.consultaService.getVuelo( vuelo  );
    }
}
