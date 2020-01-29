import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ToolboxtalksCreatePage } from './toolboxtalks-create.page';

const routes: Routes = [
  {
    path: '',
    component: ToolboxtalksCreatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ToolboxtalksCreatePageRoutingModule {}
