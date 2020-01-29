import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InductionchecklistListPage } from './inductionchecklist-list.page';

describe('InductionchecklistListPage', () => {
  let component: InductionchecklistListPage;
  let fixture: ComponentFixture<InductionchecklistListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InductionchecklistListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InductionchecklistListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
