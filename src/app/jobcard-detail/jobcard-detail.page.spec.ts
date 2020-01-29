import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { JobcardDetailPage } from './jobcard-detail.page';

describe('JobcardDetailPage', () => {
  let component: JobcardDetailPage;
  let fixture: ComponentFixture<JobcardDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobcardDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(JobcardDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
