import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InductionchecklistCreatePage } from './inductionchecklist-create.page';

const routes: Routes = [
  {
    path: '',
    component: InductionchecklistCreatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InductionchecklistCreatePageRoutingModule {}
