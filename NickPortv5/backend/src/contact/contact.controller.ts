import { Controller, Post, Body, Res, HttpStatus } from '@nestjs/common';
import { ContactService } from './contact.service';
import { Response } from 'express';

@Controller('contact')
export class ContactController {
  constructor(private readonly contactService: ContactService) {}

  @Post()
  async handleContact(
    @Body() body: { name: string; email: string; subject: string; message: string },
    @Res() res: Response,
  ) {
    const { name, email, subject, message } = body;

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
