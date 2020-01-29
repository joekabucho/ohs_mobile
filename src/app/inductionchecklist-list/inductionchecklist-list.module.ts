import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InductionchecklistListPageRoutingModule } from './inductionchecklist-list-routing.module';

import { InductionchecklistListPage } from './inductionchecklist-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InductionchecklistListPageRoutingModule
  ],
  declarations: [InductionchecklistListPage]
})
export class InductionchecklistListPageModule {}
