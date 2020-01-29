import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WorkpermitCreatePage } from './workpermit-create.page';

const routes: Routes = [
  {
    path: '',
    component: WorkpermitCreatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WorkpermitCreatePageRoutingModule {}
