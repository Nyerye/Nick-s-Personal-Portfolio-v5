import { ContactService } from './contact.service';
import { ContactDto } from './dto/contact.dto';
export declare class ContactController {
    private readonly contactService;
    constructor(contactService: ContactService);
    handleContact(contactDto: ContactDto): Promise<{
        message: string;
    }>;
}
