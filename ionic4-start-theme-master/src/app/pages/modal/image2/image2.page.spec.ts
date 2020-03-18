import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Image2Page } from './image2.page';

describe('Image2Page', () => {
  let component: Image2Page;
  let fixture: ComponentFixture<Image2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Image2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Image2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
