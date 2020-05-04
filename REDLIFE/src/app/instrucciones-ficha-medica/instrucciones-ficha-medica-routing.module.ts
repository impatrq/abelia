import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InstruccionesFichaMedicaPage } from './instrucciones-ficha-medica.page';

const routes: Routes = [
  {
    path: '',
    component: InstruccionesFichaMedicaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InstruccionesFichaMedicaPageRoutingModule {}
