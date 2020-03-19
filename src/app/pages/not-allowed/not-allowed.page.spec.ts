import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotAllowedPage } from './not-allowed.page';

describe('NotAllowedPage', () => {
  let component: NotAllowedPage;
  let fixture: ComponentFixture<NotAllowedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotAllowedPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotAllowedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
