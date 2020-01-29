import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InductionchecklistDetailPageRoutingModule } from './inductionchecklist-detail-routing.module';

import { InductionchecklistDetailPage } from './inductionchecklist-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InductionchecklistDetailPageRoutingModule
  ],
  declarations: [InductionchecklistDetailPage]
})
export class InductionchecklistDetailPageModule {}
