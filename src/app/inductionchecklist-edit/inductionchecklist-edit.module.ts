import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InductionchecklistEditPageRoutingModule } from './inductionchecklist-edit-routing.module';

import { InductionchecklistEditPage } from './inductionchecklist-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InductionchecklistEditPageRoutingModule
  ],
  declarations: [InductionchecklistEditPage]
})
export class InductionchecklistEditPageModule {}
