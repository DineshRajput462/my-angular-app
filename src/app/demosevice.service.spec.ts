import { TestBed } from '@angular/core/testing';

import { DemoseviceService } from './demosevice.service';

describe('DemoseviceService', () => {
  let service: DemoseviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DemoseviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
