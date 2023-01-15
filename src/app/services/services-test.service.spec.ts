import { TestBed } from '@angular/core/testing';

import { ServicesTestService } from './services-test.service';

describe('ServicesTestService', () => {
  let service: ServicesTestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicesTestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
