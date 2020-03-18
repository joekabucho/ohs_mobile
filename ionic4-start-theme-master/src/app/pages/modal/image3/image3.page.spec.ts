import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Image3Page } from './image3.page';

describe('Image3Page', () => {
  let component: Image3Page;
  let fixture: ComponentFixture<Image3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Image3Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Image3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
