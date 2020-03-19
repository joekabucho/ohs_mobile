import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Image1Page } from './image1.page';

describe('Image1Page', () => {
  let component: Image1Page;
  let fixture: ComponentFixture<Image1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Image1Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Image1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
