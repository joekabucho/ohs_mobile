import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WorkpermitEditPage } from './workpermit-edit.page';

const routes: Routes = [
  {
    path: '',
    component: WorkpermitEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WorkpermitEditPageRoutingModule {}
