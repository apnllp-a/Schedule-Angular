import { TestBed } from '@angular/core/testing';

import { UserAllService } from './user-all.service';

describe('UserAllService', () => {
  let service: UserAllService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserAllService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
