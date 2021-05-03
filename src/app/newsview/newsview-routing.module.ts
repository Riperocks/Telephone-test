import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewsviewPage } from './newsview.page';

const routes: Routes = [
  {
    path: '',
    component: NewsviewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewsviewPageRoutingModule {}
