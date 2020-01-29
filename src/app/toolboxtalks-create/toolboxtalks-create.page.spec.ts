import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ToolboxtalksCreatePage } from './toolboxtalks-create.page';

describe('ToolboxtalksCreatePage', () => {
  let component: ToolboxtalksCreatePage;
  let fixture: ComponentFixture<ToolboxtalksCreatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToolboxtalksCreatePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ToolboxtalksCreatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
