import { Body, Controller, Post } from '@nestjs/common';
import { ContactService } from './contact.service';
import { ContactDto } from './dto/contact.dto';

@Controller('contact')
export class ContactController {
  constructor(private readonly contactService: ContactService) {}

  @Post()
  async handleContact(@Body() contactDto: ContactDto) {
    await this.contactService.sendEmail(contactDto);
    return { message: 'Message sent successfully!' };
  }
}
