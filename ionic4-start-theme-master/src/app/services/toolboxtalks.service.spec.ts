import { TestBed } from '@angular/core/testing';

import { ToolboxtalkService } from './toolboxtalks.service';

describe('ToolboxtalksService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ToolboxtalkService = TestBed.get(ToolboxtalkService);
    expect(service).toBeTruthy();
  });
});
