/*
* FILE		      	: contact.controller.spec.ts
* PROJECT	      	: Nick's Personal Portfolio Site v5
* PROGRAMMER	  	: Nicholas Reilly
* FIRST VERSION		: 2025-01-05
* DESCRIPTION	  	: Unit test for my NestJS controller. Verifies the ContactController can be instantiated.
*/

//Import the testing module and the ContactController module 
import { Test, TestingModule } from '@nestjs/testing';
import { ContactController } from './contact.controller';

// Define the test suite
describe('ContactController', () => {
  let controller: ContactController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ContactController],
    }).compile();

    controller = module.get<ContactController>(ContactController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
