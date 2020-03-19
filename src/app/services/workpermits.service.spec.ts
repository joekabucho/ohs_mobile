import { TestBed } from '@angular/core/testing';

import { WorkpermitsService } from './workpermits.service';

describe('WorkpermitsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WorkpermitsService = TestBed.get(WorkpermitsService);
    expect(service).toBeTruthy();
  });
});
