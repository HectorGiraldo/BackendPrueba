import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// var cors = require('cors');



async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // app.use(cors());
  const corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200,
    credentials: true,
    allowedHeaders: ['Content-Type', 'application/json'],
    methods: ['GET', 'PUT', 'POST']
  };
  app.enableCors(corsOptions);
  await app.listen(3000);

}
bootstrap();
