import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WorkpermitDetailPageRoutingModule } from './workpermit-detail-routing.module';

import { WorkpermitDetailPage } from './workpermit-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WorkpermitDetailPageRoutingModule
  ],
  declarations: [WorkpermitDetailPage]
})
export class WorkpermitDetailPageModule {}
