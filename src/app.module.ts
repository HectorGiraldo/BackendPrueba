import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VuelosController } from './controllers/vuelos/vuelos.controller';
import { ReservasController } from './controllers/reservas/reservas.controller';
import { ConsultaController } from './controllers/consulta/consulta.controller';
import { ConsultasService } from './services/consultas/consultas.service';
import { ReservasService } from './services/reservas/reservas.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ReservaSchema } from './schemas/reserva.schema';
import { VueloSchema } from './schemas/vuelo.schema';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://HectorGiraldo:Thomas0316@cluster0-akigh.mongodb.net/test?retryWrites=true&w=majority'),
    MongooseModule.forFeature([  
      { name: 'Reserva', schema: ReservaSchema },
      { name: 'Vuelo', schema: VueloSchema },
    ]),
  ],

  controllers: [
    AppController,
    VuelosController,
    ReservasController,
    ConsultaController],

  providers: [AppService,
    ConsultasService,
    ReservasService],
})
export class AppModule {}
