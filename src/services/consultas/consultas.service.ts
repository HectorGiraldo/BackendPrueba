import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Vuelo } from '../../interfaces/vuelo.interface';
import { ConsultaVueloDto } from '../../controllers/consulta/dto/consultarVuelo.dto';

@Injectable()
export class ConsultasService {

    constructor(@InjectModel('Vuelo')private readonly  vueloModel: Model<Vuelo>) {}

    async getVuelos() {
        return await this.vueloModel.find();
    }

    async getVuelo( vuelo: Vuelo ) {
        let fechaR = new Date(vuelo.fecha_vuelo);
        let  fechaDate = fechaR.setHours(0, 0, 0, 0);
        fechaDate = fechaDate / 1000;
        return await this.vueloModel.find({"$and": [{"desde": vuelo.desde}, {"hacia": vuelo.hacia}, {"fecha_vuelo": fechaDate }]});
    }

    // async consultaVuelo(vuelo: ConsultaVueloDto) {
    //     const newVuelo = new this.vueloModel( vuelo );
    //     // tslint:disable-next-line: no-console
    //     return await newVuelo.save();
    // }
}
