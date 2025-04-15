import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';
import { ContactDto } from './dto/contact.dto';

@Injectable()
export class ContactService {
  async sendEmail(contact: ContactDto): Promise<void> {
    const transporter = nodemailer.createTransport({
      service: 'Outlook',
      auth: {
        user: 'nicholas_reilly@outlook.com',
        pass: 'YOUR_APP_PASSWORD', // Create a secure app password for this Nicholas
      },
    });

    const mailOptions = {
      from: contact.email,
      to: 'nicholas_reilly@outlook.com',
      subject: `Portfolio Contact: ${contact.subject}`,
      text: `From: ${contact.name} <${contact.email}>\n\n${contact.message}`,
    };

    await transporter.sendMail(mailOptions);
  }
}
