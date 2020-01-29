import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'jobcard-edit',
    loadChildren: () => import('./jobcard-edit/jobcard-edit.module').then( m => m.JobcardEditPageModule)
  },
  {
    path: 'jobcard-create',
    loadChildren: () => import('./jobcard-create/jobcard-create.module').then( m => m.JobcardCreatePageModule)
  },
  {
    path: 'jobcard-list',
    loadChildren: () => import('./jobcard-list/jobcard-list.module').then( m => m.JobcardListPageModule)
  },
  {
    path: 'workpermit-edit',
    loadChildren: () => import('./workpermit-edit/workpermit-edit.module').then( m => m.WorkpermitEditPageModule)
  },
  {
    path: 'workpermit-list',
    loadChildren: () => import('./workpermit-list/workpermit-list.module').then( m => m.WorkpermitListPageModule)
  },
  {
    path: 'workpermit-create',
    loadChildren: () => import('./workpermit-create/workpermit-create.module').then( m => m.WorkpermitCreatePageModule)
  },
  {
    path: 'inductionchecklist-create',
    loadChildren: () => import('./inductionchecklist-create/inductionchecklist-create.module').then( m => m.InductionchecklistCreatePageModule)
  },
  {
    path: 'inductionchecklist-edit',
    loadChildren: () => import('./inductionchecklist-edit/inductionchecklist-edit.module').then( m => m.InductionchecklistEditPageModule)
  },
  {
    path: 'inductionchecklist-list',
    loadChildren: () => import('./inductionchecklist-list/inductionchecklist-list.module').then( m => m.InductionchecklistListPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
