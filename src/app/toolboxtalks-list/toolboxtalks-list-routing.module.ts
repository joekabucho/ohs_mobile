import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ToolboxtalksListPage } from './toolboxtalks-list.page';

const routes: Routes = [
  {
    path: '',
    component: ToolboxtalksListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ToolboxtalksListPageRoutingModule {}
