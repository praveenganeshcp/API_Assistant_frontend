import { TestBed } from '@angular/core/testing';

import { OverlayInterceptorService } from './overlay-interceptor.service';

describe('OverlayInterceptorService', () => {
  let service: OverlayInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OverlayInterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
