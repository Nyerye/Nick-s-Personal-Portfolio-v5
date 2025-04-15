"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactService = void 0;
const common_1 = require("@nestjs/common");
const nodemailer = require("nodemailer");
let ContactService = class ContactService {
    async sendEmail(contact) {
        const transporter = nodemailer.createTransport({
            service: 'Outlook',
            auth: {
                user: 'nicholas_reilly@outlook.com',
                pass: 'YOUR_APP_PASSWORD',
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
};
exports.ContactService = ContactService;
exports.ContactService = ContactService = __decorate([
    (0, common_1.Injectable)()
], ContactService);
//# sourceMappingURL=contact.service.js.map