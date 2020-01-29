import { TestBed } from '@angular/core/testing';

import { WorkpermitService } from './workpermit.service';

describe('WorkpermitService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WorkpermitService = TestBed.get(WorkpermitService);
    expect(service).toBeTruthy();
  });
});
