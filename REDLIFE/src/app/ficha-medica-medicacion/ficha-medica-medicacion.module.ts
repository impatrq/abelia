import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FichaMedicaMedicacionPageRoutingModule } from './ficha-medica-medicacion-routing.module';

import { FichaMedicaMedicacionPage } from './ficha-medica-medicacion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FichaMedicaMedicacionPageRoutingModule
  ],
  declarations: [FichaMedicaMedicacionPage]
})
export class FichaMedicaMedicacionPageModule {}
