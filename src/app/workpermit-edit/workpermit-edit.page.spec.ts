import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WorkpermitEditPage } from './workpermit-edit.page';

describe('WorkpermitEditPage', () => {
  let component: WorkpermitEditPage;
  let fixture: ComponentFixture<WorkpermitEditPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkpermitEditPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WorkpermitEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
