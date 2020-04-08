import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './pages/register/register.module#RegisterPageModule' },
  { path: 'about', loadChildren: './pages/about/about.module#AboutPageModule' },
  { path: 'settings', loadChildren: './pages/settings/settings.module#SettingsPageModule' },
  { path: 'edit-profile', loadChildren: './pages/edit-profile/edit-profile.module#EditProfilePageModule' },
  { path: 'home-results', loadChildren: './pages/home-results/home-results.module#HomeResultsPageModule' },
  { path: 'incident-create', loadChildren: './pages/incident-create/incident-create.module#IncidentCreatePageModule' },
  { path: 'toolbox-create', loadChildren: './pages/toolbox-create/toolbox-create.module#ToolboxCreatePageModule' },
  { path: 'inductionchecklist-create', loadChildren: './pages/inductionchecklist-create/inductionchecklist-create.module#InductionchecklistCreatePageModule' },

  { path: 'image3', loadChildren: './pages/modal/image3/image3.module#Image3PageModule' },
  { path: 'image2', loadChildren: './pages/modal/image2/image2.module#Image2PageModule' },
  { path: 'image1', loadChildren: './pages/modal/image1/image1.module#Image1PageModule' },
  { path: 'not-allowed', loadChildren: './pages/not-allowed/not-allowed.module#NotAllowedPageModule' },
  { path: 'image-upload', loadChildren: './pages/image-upload/image-upload.module#ImageUploadPageModule' },
  { path: 'verification-image', loadChildren: './pages/verification-image/verification-image.module#VerificationImagePageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
