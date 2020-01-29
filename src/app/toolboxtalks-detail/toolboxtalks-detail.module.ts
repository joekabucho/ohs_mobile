import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ToolboxtalksDetailPageRoutingModule } from './toolboxtalks-detail-routing.module';

import { ToolboxtalksDetailPage } from './toolboxtalks-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ToolboxtalksDetailPageRoutingModule
  ],
  declarations: [ToolboxtalksDetailPage]
})
export class ToolboxtalksDetailPageModule {}
