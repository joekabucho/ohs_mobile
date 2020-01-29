import { TestBed } from '@angular/core/testing';

import { InductionchecklistService } from './inductionchecklist.service';

describe('InductionchecklistService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InductionchecklistService = TestBed.get(InductionchecklistService);
    expect(service).toBeTruthy();
  });
});
