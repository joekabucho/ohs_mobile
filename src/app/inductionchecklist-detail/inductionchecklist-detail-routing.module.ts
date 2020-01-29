import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InductionchecklistDetailPage } from './inductionchecklist-detail.page';

const routes: Routes = [
  {
    path: '',
    component: InductionchecklistDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InductionchecklistDetailPageRoutingModule {}
