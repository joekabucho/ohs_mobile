import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WorkpermitEditPageRoutingModule } from './workpermit-edit-routing.module';

import { WorkpermitEditPage } from './workpermit-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WorkpermitEditPageRoutingModule
  ],
  declarations: [WorkpermitEditPage]
})
export class WorkpermitEditPageModule {}
