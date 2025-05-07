/*
* FILE		      	: main.ts
* PROJECT	      	: Nick's Personal Portfolio Site v5
* PROGRAMMER	  	: Nicholas Reilly
* FIRST VERSION		: 2025-01-05
* DESCRIPTION	  	: Main entry point for the NestJS application. Sets up the application, enables CORS, and serves static files.
*/


// Import necessary modules and classes from NestJS framework and the application files.
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';

// Import the environment variables from the .env file.
async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.enableCors({
    origin: 'https://nyerye.github.io',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  });

  // Set up static file serving for the resume
  app.useStaticAssets(join(__dirname, '..', 'public'));

  await app.listen(process.env.PORT || 3000);
}
bootstrap();
