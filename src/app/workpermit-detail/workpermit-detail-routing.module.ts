import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WorkpermitDetailPage } from './workpermit-detail.page';

const routes: Routes = [
  {
    path: '',
    component: WorkpermitDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WorkpermitDetailPageRoutingModule {}
