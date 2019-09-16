import { Controller, Get } from '@nestjs/common';

@Controller('vuelos')
export class VuelosController {

    @Get()
    getVuelos() {
        return 'vuelos';
    }
}