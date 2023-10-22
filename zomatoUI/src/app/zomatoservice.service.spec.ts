import { TestBed } from '@angular/core/testing';

import { ZomatoserviceService } from './zomatoservice.service';

describe('ZomatoserviceService', () => {
  let service: ZomatoserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ZomatoserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
