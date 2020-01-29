import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ToolboxtalksEditPage } from './toolboxtalks-edit.page';

describe('ToolboxtalksEditPage', () => {
  let component: ToolboxtalksEditPage;
  let fixture: ComponentFixture<ToolboxtalksEditPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToolboxtalksEditPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ToolboxtalksEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
