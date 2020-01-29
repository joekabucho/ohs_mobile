import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ToolboxtalksListPageRoutingModule } from './toolboxtalks-list-routing.module';

import { ToolboxtalksListPage } from './toolboxtalks-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ToolboxtalksListPageRoutingModule
  ],
  declarations: [ToolboxtalksListPage]
})
export class ToolboxtalksListPageModule {}
