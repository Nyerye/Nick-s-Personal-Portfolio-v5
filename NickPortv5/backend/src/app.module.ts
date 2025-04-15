import { Module } from '@nestjs/common';
import { ContactModule } from './contact/contact.module';
import { ResumeController } from './resume/resume.controller';

@Module({
  imports: [ContactModule],
  controllers: [ResumeController],
})
export class AppModule {}
