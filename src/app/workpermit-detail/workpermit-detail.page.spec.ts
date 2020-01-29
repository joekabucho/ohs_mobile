import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WorkpermitDetailPage } from './workpermit-detail.page';

describe('WorkpermitDetailPage', () => {
  let component: WorkpermitDetailPage;
  let fixture: ComponentFixture<WorkpermitDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkpermitDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WorkpermitDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
