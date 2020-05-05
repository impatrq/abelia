import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecuperacioncontrasenaPage } from './recuperacioncontrasena.page';

const routes: Routes = [
  {
    path: '',
    component: RecuperacioncontrasenaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecuperacioncontrasenaPageRoutingModule {}
