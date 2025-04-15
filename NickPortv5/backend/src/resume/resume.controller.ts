import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';
import { join } from 'path';

@Controller('resume')
export class ResumeController {
  @Get()
  downloadResume(@Res() res: Response) {
    const file = join(__dirname, '..', '..', 'public', 'nick_resume.pdf');
    res.download(file, 'Nick_Resume.pdf');
  }
}
