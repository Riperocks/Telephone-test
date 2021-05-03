import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Successmodal2PageRoutingModule } from './successmodal2-routing.module';

import { Successmodal2Page } from './successmodal2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Successmodal2PageRoutingModule
  ],
  declarations: [Successmodal2Page]
})
export class Successmodal2PageModule {}
