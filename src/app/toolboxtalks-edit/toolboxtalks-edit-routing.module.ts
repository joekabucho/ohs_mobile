import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ToolboxtalksEditPage } from './toolboxtalks-edit.page';

const routes: Routes = [
  {
    path: '',
    component: ToolboxtalksEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ToolboxtalksEditPageRoutingModule {}
