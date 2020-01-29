import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WorkpermitListPageRoutingModule } from './workpermit-list-routing.module';

import { WorkpermitListPage } from './workpermit-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WorkpermitListPageRoutingModule
  ],
  declarations: [WorkpermitListPage]
})
export class WorkpermitListPageModule {}
