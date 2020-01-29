import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JobcardEditPageRoutingModule } from './jobcard-edit-routing.module';

import { JobcardEditPage } from './jobcard-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JobcardEditPageRoutingModule
  ],
  declarations: [JobcardEditPage]
})
export class JobcardEditPageModule {}
