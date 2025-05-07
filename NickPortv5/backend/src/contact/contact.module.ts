/*
* FILE		      	: contact.controller.spec.ts
* PROJECT	      	: Nick's Personal Portfolio Site v5
* PROGRAMMER	  	: Nicholas Reilly
* FIRST VERSION		: 2025-01-05
* DESCRIPTION	  	: Created the controller used and defines how it gets it sources from.
*/

// Import the required modules needed.
import { Module } from '@nestjs/common';
import { ContactService } from './contact.service';
import { ContactController } from './contact.controller';

// Define the modules controllers and providers source
@Module({
  controllers: [ContactController],
  providers: [ContactService],
})
export class ContactModule {}
