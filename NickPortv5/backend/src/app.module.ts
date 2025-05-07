/*
* FILE		      	: app.module.ts
* PROJECT	      	: Nick's Personal Portfolio Site v5
* PROGRAMMER	  	: Nicholas Reilly
* FIRST VERSION		: 2025-01-05
* DESCRIPTION	  	: Main application module for the NestJS application.
*/

// Import necessary modules and classes from NestJS framework.
import { Module } from '@nestjs/common';
import { ContactModule } from './contact/contact.module';

// Create the main application module class.
@Module({
  imports: [ContactModule],
})
export class AppModule {}
