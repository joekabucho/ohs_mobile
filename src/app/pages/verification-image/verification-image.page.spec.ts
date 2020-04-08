import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerificationImagePage } from './verification-image.page';

describe('VerificationImagePage', () => {
  let component: VerificationImagePage;
  let fixture: ComponentFixture<VerificationImagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerificationImagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerificationImagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
