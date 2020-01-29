import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { JobcardListPage } from './jobcard-list.page';

describe('JobcardListPage', () => {
  let component: JobcardListPage;
  let fixture: ComponentFixture<JobcardListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobcardListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(JobcardListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
