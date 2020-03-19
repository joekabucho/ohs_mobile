import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolboxCreatePage } from './toolbox-create.page';

describe('ToolboxCreatePage', () => {
  let component: ToolboxCreatePage;
  let fixture: ComponentFixture<ToolboxCreatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToolboxCreatePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolboxCreatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
