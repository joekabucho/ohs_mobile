
// app-routing.module.ts
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'jobcardlist', pathMatch: 'full' },
    // tslint:disable-next-line:max-line-length
  { path: 'inductioncreate', loadChildren: () => import('./inductionchecklist-create/inductionchecklist-create.module').then(m => m.InductionchecklistCreatePageModule) },
    // tslint:disable-next-line:max-line-length
  { path: 'inductiondetail', loadChildren: () => import('./inductionchecklist-detail/inductionchecklist-detail.module').then(m => m.InductionchecklistDetailPageModule) },
  { path: 'inductionedit/:_id', loadChildren: () => import('./inductionchecklist-edit/inductionchecklist-edit.module').then(m => m.InductionchecklistEditPageModule) },
  { path: 'inductionlist', loadChildren: () => import('./inductionchecklist-list/inductionchecklist-list.module').then(m => m.InductionchecklistListPageModule) },

  { path: 'jobcardcreate', loadChildren: () => import('./jobcard-create/jobcard-create.module').then(m => m.JobcardCreatePageModule) },
  { path: 'jobcarddetail', loadChildren: () => import('./jobcard-detail/jobcard-detail.module').then(m => m.JobcardDetailPageModule) },
  { path: 'jobcardedit/:_id', loadChildren: () => import('./jobcard-edit/jobcard-edit.module').then(m => m.JobcardEditPageModule) },
  { path: 'jobcardlist', loadChildren: () => import('./jobcard-list/jobcard-list.module').then(m => m.JobcardListPageModule) },

  { path: 'toolboxtalkscreate', loadChildren: () => import('./toolboxtalks-create/toolboxtalks-create.module').then(m => m.ToolboxtalksCreatePageModule) },
  { path: 'toolboxtalksdetail', loadChildren: () => import('./toolboxtalks-detail/toolboxtalks-detail.module').then(m => m.ToolboxtalksDetailPageModule) },
  { path: 'toolboxtalksedit/:_id', loadChildren: () => import('./toolboxtalks-edit/toolboxtalks-edit.module').then(m => m.ToolboxtalksEditPageModule) },
  { path: 'toolboxtalkslist', loadChildren: () => import('./toolboxtalks-list/toolboxtalks-list.module').then(m => m.ToolboxtalksListPageModule) },

  { path: 'workpermitcreate', loadChildren: () => import('./workpermit-create/workpermit-create.module').then(m => m.WorkpermitCreatePageModule) },
  { path: 'workpermitdetail', loadChildren: () => import('./workpermit-detail/workpermit-detail.module').then(m => m.WorkpermitDetailPageModule) },
  { path: 'workpermitedit/:_id', loadChildren: () => import('./workpermit-edit/workpermit-edit.module').then(m => m.WorkpermitEditPageModule) },
  { path: 'workpermitlist', loadChildren: () => import('./workpermit-list/workpermit-list.module').then(m => m.WorkpermitListPageModule) },



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
