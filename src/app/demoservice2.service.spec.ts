import { TestBed } from '@angular/core/testing';

import { Demoservice2Service } from './demoservice2.service';

describe('Demoservice2Service', () => {
  let service: Demoservice2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Demoservice2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
