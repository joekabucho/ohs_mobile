import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JobcardEditPage } from './jobcard-edit.page';

const routes: Routes = [
  {
    path: '',
    component: JobcardEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JobcardEditPageRoutingModule {}
