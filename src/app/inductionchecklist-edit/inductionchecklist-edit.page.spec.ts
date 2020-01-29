import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InductionchecklistEditPage } from './inductionchecklist-edit.page';

describe('InductionchecklistEditPage', () => {
  let component: InductionchecklistEditPage;
  let fixture: ComponentFixture<InductionchecklistEditPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InductionchecklistEditPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InductionchecklistEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
