import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WorkpermitListPage } from './workpermit-list.page';

const routes: Routes = [
  {
    path: '',
    component: WorkpermitListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WorkpermitListPageRoutingModule {}
