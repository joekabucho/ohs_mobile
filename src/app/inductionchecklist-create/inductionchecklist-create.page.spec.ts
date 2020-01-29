import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InductionchecklistCreatePage } from './inductionchecklist-create.page';

describe('InductionchecklistCreatePage', () => {
  let component: InductionchecklistCreatePage;
  let fixture: ComponentFixture<InductionchecklistCreatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InductionchecklistCreatePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InductionchecklistCreatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
