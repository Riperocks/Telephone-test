import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewsviewPageRoutingModule } from './newsview-routing.module';

import { NewsviewPage } from './newsview.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewsviewPageRoutingModule
  ],
  declarations: [NewsviewPage]
})
export class NewsviewPageModule {}
