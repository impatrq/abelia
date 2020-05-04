import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InstruccionesFichaMedicaPageRoutingModule } from './instrucciones-ficha-medica-routing.module';

import { InstruccionesFichaMedicaPage } from './instrucciones-ficha-medica.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InstruccionesFichaMedicaPageRoutingModule
  ],
  declarations: [InstruccionesFichaMedicaPage]
})
export class InstruccionesFichaMedicaPageModule {}
