import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JobcardListPage } from './jobcard-list.page';

const routes: Routes = [
  {
    path: '',
    component: JobcardListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JobcardListPageRoutingModule {}
