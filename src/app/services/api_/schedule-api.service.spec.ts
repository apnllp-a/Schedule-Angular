import { TestBed } from '@angular/core/testing';

import { ScheduleApiService } from './schedule-api.service';

describe('ScheduleApiService', () => {
  let service: ScheduleApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScheduleApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
