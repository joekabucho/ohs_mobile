import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ToolboxtalksDetailPage } from './toolboxtalks-detail.page';

const routes: Routes = [
  {
    path: '',
    component: ToolboxtalksDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ToolboxtalksDetailPageRoutingModule {}
