import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InductionchecklistEditPage } from './inductionchecklist-edit.page';

const routes: Routes = [
  {
    path: '',
    component: InductionchecklistEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InductionchecklistEditPageRoutingModule {}
