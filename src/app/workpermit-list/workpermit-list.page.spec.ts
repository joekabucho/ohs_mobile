import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WorkpermitListPage } from './workpermit-list.page';

describe('WorkpermitListPage', () => {
  let component: WorkpermitListPage;
  let fixture: ComponentFixture<WorkpermitListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkpermitListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WorkpermitListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
