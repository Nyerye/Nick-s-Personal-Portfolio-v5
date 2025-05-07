/*
* FILE		      	: app.controller.spec.ts
* PROJECT	      	: Nick's Personal Portfolio Site v5
* PROGRAMMER	  	: Nicholas Reilly
* FIRST VERSION		: 2025-01-05
* DESCRIPTION	  	: Unit tests for the AppController class.
*/

// Import necessary modules and classes from NestJS testing utilities and the application files.
import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

// Describe the test suite for the AppController class.
describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  // Test case for the root endpoint of the application.
  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
});
