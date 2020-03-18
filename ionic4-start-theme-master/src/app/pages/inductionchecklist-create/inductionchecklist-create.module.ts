import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { InductionchecklistCreatePage } from './inductionchecklist-create.page';

const routes: Routes = [
  {
    path: '',
    component: InductionchecklistCreatePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [InductionchecklistCreatePage]
})
export class InductionchecklistCreatePageModule {}
