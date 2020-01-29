import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WorkpermitCreatePageRoutingModule } from './workpermit-create-routing.module';

import { WorkpermitCreatePage } from './workpermit-create.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WorkpermitCreatePageRoutingModule
  ],
  declarations: [WorkpermitCreatePage]
})
export class WorkpermitCreatePageModule {}
