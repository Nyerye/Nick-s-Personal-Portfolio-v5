/*
* FILE		      	: app.service.ts
* PROJECT	      	: Nick's Personal Portfolio Site v5
* PROGRAMMER	  	: Nicholas Reilly
* FIRST VERSION		: 2025-01-05
* DESCRIPTION	  	: Service class for the application, providing business logic and data handling. Simple test case to return a string "Hello World!".
*/

// Import necessary modules and classes from NestJS framework.
import { Injectable } from '@nestjs/common';

// Create a service class for the application.
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
