import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LogoregPage } from './logoreg.page';

const routes: Routes = [
  {
    path: '',
    component: LogoregPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LogoregPageRoutingModule {}
