import { TestBed } from '@angular/core/testing';

import { ToolboxtalksService } from './toolboxtalks.service';

describe('ToolboxtalksService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ToolboxtalksService = TestBed.get(ToolboxtalksService);
    expect(service).toBeTruthy();
  });
});
