/*
* FILE		      	: contact.service.ts
* PROJECT	      	: Nick's Personal Portfolio Site v5
* PROGRAMMER	  	: Nicholas Reilly
* FIRST VERSION		: 2025-01-05
* DESCRIPTION	  	: Created the controller used and defines how it gets it sources from.
*/


import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';
import * as dotenv from 'dotenv';

dotenv.config();

@Injectable()
export class ContactService {
  async sendEmail(name: string, email: string, subject: string, message: string): Promise<void> {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });
    
    

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `New Contact Form Submission: ${subject}`,
      html: `
        <h2>New message from your portfolio site</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong><br>${message}</p>
      `,
    };
    
    

    try {
      const info = await transporter.sendMail(mailOptions);
      console.log("✅ Email sent:", info.response);
    } catch (err) {
      console.error("❌ Email sending failed:", err);
      throw err;
    }
  }
}
