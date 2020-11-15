import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InformacionFichaMedicaPage } from './informacion-ficha-medica.page';

const routes: Routes = [
  {
    path: '',
    component: InformacionFichaMedicaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InformacionFichaMedicaPageRoutingModule {}
