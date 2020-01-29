import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ToolboxtalksEditPageRoutingModule } from './toolboxtalks-edit-routing.module';

import { ToolboxtalksEditPage } from './toolboxtalks-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ToolboxtalksEditPageRoutingModule
  ],
  declarations: [ToolboxtalksEditPage]
})
export class ToolboxtalksEditPageModule {}
