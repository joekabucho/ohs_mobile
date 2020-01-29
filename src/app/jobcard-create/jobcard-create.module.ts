import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JobcardCreatePageRoutingModule } from './jobcard-create-routing.module';

import { JobcardCreatePage } from './jobcard-create.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JobcardCreatePageRoutingModule
  ],
  declarations: [JobcardCreatePage]
})
export class JobcardCreatePageModule {}
