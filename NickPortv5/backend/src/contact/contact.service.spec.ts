/*
* FILE		      	: contact.service.spec.ts
* PROJECT	      	: Nick's Personal Portfolio Site v5
* PROGRAMMER	  	: Nicholas Reilly
* FIRST VERSION		: 2025-01-05
* DESCRIPTION	  	: Unit tests for the ContactService class in the NestJS application.
*/

// Import the required modules needed.
import { Test, TestingModule } from '@nestjs/testing';
import { ContactService } from './contact.service';

// Describe the test suite for the ContactService.
describe('ContactService', () => {
  let service: ContactService;

  // Before each test, create a new instance of the ContactService.
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ContactService],
    }).compile();

    service = module.get<ContactService>(ContactService);
  });

  // Test that the ContactService is defined and working correctly.
  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
