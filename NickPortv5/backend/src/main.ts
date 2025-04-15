import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { join } from 'path';
import * as express from 'express';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Serve static files from /public
  app.use('/public', express.static(join(__dirname, '..', 'public')));

  app.enableCors();
  await app.listen(3000);
}
bootstrap();
