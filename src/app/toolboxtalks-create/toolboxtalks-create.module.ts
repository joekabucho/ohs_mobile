import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ToolboxtalksCreatePageRoutingModule } from './toolboxtalks-create-routing.module';

import { ToolboxtalksCreatePage } from './toolboxtalks-create.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ToolboxtalksCreatePageRoutingModule
  ],
  declarations: [ToolboxtalksCreatePage]
})
export class ToolboxtalksCreatePageModule {}
