import { TestBed } from '@angular/core/testing';

import { InvestserviceService } from './investservice.service';

describe('InvestserviceService', () => {
  let service: InvestserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InvestserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
