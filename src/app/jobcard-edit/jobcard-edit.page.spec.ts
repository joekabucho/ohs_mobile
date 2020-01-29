import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { JobcardEditPage } from './jobcard-edit.page';

describe('JobcardEditPage', () => {
  let component: JobcardEditPage;
  let fixture: ComponentFixture<JobcardEditPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobcardEditPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(JobcardEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
