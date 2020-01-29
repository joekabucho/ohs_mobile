import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ToolboxtalksDetailPage } from './toolboxtalks-detail.page';

describe('ToolboxtalksDetailPage', () => {
  let component: ToolboxtalksDetailPage;
  let fixture: ComponentFixture<ToolboxtalksDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToolboxtalksDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ToolboxtalksDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
