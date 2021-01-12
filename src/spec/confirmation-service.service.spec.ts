import {TestBed} from '@angular/core/testing';

import {ConfirmationServiceService} from './confirmation-service.service';

describe('ConfirmationServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConfirmationServiceService = TestBed.get(ConfirmationServiceService);
    expect(service).toBeTruthy();
  });
});
