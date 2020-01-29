import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InductionchecklistCreatePageRoutingModule } from './inductionchecklist-create-routing.module';

import { InductionchecklistCreatePage } from './inductionchecklist-create.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InductionchecklistCreatePageRoutingModule
  ],
  declarations: [InductionchecklistCreatePage]
})
export class InductionchecklistCreatePageModule {}
