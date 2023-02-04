import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
/* import mongoose from 'mongoose'; */
import { AppModule } from './app.module';

async function bootstrap() {
  /* const conn = await mongoose
    .createConnection('mongodb://127.0.0.1:27017/test')
    .asPromise();
  console.log('mongo conn: ', conn.getClient()); */
  console.log('DB URI: ', process.env.DB_URI);
  console.log('TYPE: ', typeof process.env.DB_URI);
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useGlobalPipes(new ValidationPipe()); // la app entera va a hacer uso de los pipes
  await app.listen(3000);
}
bootstrap();
