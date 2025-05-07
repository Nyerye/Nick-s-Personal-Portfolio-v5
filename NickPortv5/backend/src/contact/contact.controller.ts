/*
* FILE		      	: contact.controller.ts
* PROJECT	      	: Nick's Personal Portfolio Site v5
* PROGRAMMER	  	: Nicholas Reilly
* FIRST VERSION		: 2025-01-05
* DESCRIPTION	  	: Code for creating a service that will send the POST requests and 
*/

// Import the modules needed
import { Controller, Post, Body, Res, HttpStatus } from '@nestjs/common';
import { ContactService } from './contact.service';
import { Response } from 'express';

// Declare the ContactController class from the external reference.
@Controller('contact')
export class ContactController {
  constructor(private readonly contactService: ContactService) {}

  // Extract the body and the response from the POST request
  @Post()
  async handleContact(
    @Body() body: { name: string; email: string; subject: string; message: string },
    @Res() res: Response,
  ) {
    const { name, email, subject, message } = body;

    // Try to send an email from the page. If it fails, throw the following messages.
    try {
      await this.contactService.sendEmail(name, email, subject, message);
      return res.status(HttpStatus.OK).json({ success: true });
    } catch (err) {
      console.error('Email sending failed:', err);
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        success: false,
        error: err.message || 'Failed to send message',
      });
    }
  }
}
