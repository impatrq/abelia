import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FichaMedicaEnfermedadesPage } from './ficha-medica-enfermedades.page';

const routes: Routes = [
  {
    path: '',
    component: FichaMedicaEnfermedadesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FichaMedicaEnfermedadesPageRoutingModule {}
