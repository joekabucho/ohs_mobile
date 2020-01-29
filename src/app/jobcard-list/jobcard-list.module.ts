import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JobcardListPageRoutingModule } from './jobcard-list-routing.module';

import { JobcardListPage } from './jobcard-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JobcardListPageRoutingModule
  ],
  declarations: [JobcardListPage]
})
export class JobcardListPageModule {}
