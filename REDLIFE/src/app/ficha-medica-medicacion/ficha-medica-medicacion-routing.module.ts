import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FichaMedicaMedicacionPage } from './ficha-medica-medicacion.page';

const routes: Routes = [
  {
    path: '',
    component: FichaMedicaMedicacionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FichaMedicaMedicacionPageRoutingModule {}
