import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FichaMedicaEnfermedadesPageRoutingModule } from './ficha-medica-enfermedades-routing.module';

import { FichaMedicaEnfermedadesPage } from './ficha-medica-enfermedades.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FichaMedicaEnfermedadesPageRoutingModule
  ],
  declarations: [FichaMedicaEnfermedadesPage]
})
export class FichaMedicaEnfermedadesPageModule {}
