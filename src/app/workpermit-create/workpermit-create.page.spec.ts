import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WorkpermitCreatePage } from './workpermit-create.page';

describe('WorkpermitCreatePage', () => {
  let component: WorkpermitCreatePage;
  let fixture: ComponentFixture<WorkpermitCreatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkpermitCreatePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WorkpermitCreatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
