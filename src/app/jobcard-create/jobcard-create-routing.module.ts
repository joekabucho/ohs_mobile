import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JobcardCreatePage } from './jobcard-create.page';

const routes: Routes = [
  {
    path: '',
    component: JobcardCreatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JobcardCreatePageRoutingModule {}
