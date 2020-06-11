import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GenerarapodoPage } from './generarapodo.page';

const routes: Routes = [
  {
    path: '',
    component: GenerarapodoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GenerarapodoPageRoutingModule {}
