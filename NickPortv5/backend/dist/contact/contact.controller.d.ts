import { ContactService } from './contact.service';
import { Response } from 'express';
export declare class ContactController {
    private readonly contactService;
    constructor(contactService: ContactService);
    handleContact(body: {
        name: string;
        email: string;
        subject: string;
        message: string;
    }, res: Response): Promise<Response<any, Record<string, any>>>;
}
