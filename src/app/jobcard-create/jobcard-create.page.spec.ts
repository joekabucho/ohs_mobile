import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { JobcardCreatePage } from './jobcard-create.page';

describe('JobcardCreatePage', () => {
  let component: JobcardCreatePage;
  let fixture: ComponentFixture<JobcardCreatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobcardCreatePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(JobcardCreatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
