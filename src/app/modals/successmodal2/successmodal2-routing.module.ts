import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Successmodal2Page } from './successmodal2.page';

const routes: Routes = [
  {
    path: '',
    component: Successmodal2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Successmodal2PageRoutingModule {}
