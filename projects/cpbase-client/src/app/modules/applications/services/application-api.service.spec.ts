import { TestBed } from '@angular/core/testing';

import { ApplicationApiService } from './application-api.service';

describe('ApplicationApiService', () => {
  let service: ApplicationApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApplicationApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
