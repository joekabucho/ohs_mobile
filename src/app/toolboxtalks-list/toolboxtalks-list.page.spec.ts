import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ToolboxtalksListPage } from './toolboxtalks-list.page';

describe('ToolboxtalksListPage', () => {
  let component: ToolboxtalksListPage;
  let fixture: ComponentFixture<ToolboxtalksListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToolboxtalksListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ToolboxtalksListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
