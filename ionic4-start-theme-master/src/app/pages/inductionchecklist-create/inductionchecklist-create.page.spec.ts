import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InductionchecklistCreatePage } from './inductionchecklist-create.page';

describe('InductionchecklistCreatePage', () => {
  let component: InductionchecklistCreatePage;
  let fixture: ComponentFixture<InductionchecklistCreatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InductionchecklistCreatePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InductionchecklistCreatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
