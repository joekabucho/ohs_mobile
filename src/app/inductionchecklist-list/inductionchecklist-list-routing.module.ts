import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InductionchecklistListPage } from './inductionchecklist-list.page';

const routes: Routes = [
  {
    path: '',
    component: InductionchecklistListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InductionchecklistListPageRoutingModule {}
