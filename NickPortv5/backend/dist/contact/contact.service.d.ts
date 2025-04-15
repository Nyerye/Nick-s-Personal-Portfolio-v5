import { ContactDto } from './dto/contact.dto';
export declare class ContactService {
    sendEmail(contact: ContactDto): Promise<void>;
}
