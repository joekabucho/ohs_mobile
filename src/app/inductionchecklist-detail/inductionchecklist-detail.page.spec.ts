import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InductionchecklistDetailPage } from './inductionchecklist-detail.page';

describe('InductionchecklistDetailPage', () => {
  let component: InductionchecklistDetailPage;
  let fixture: ComponentFixture<InductionchecklistDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InductionchecklistDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InductionchecklistDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
