/*
* FILE		      	: app.controller.ts
* PROJECT	      	: Nick's Personal Portfolio Site v5
* PROGRAMMER	  	: Nicholas Reilly
* FIRST VERSION		: 2025-01-05
* DESCRIPTION	  	: Controller for the root endpoint of the application.
*/

// Import necessary modules and classes from NestJS framework.
import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

// Create a controller class for the application.
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // Define a GET endpoint for the root URL.
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
