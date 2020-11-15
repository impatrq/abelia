import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InformacionFichaMedicaPageRoutingModule } from './informacion-ficha-medica-routing.module';

import { InformacionFichaMedicaPage } from './informacion-ficha-medica.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InformacionFichaMedicaPageRoutingModule
  ],
  declarations: [InformacionFichaMedicaPage]
})
export class InformacionFichaMedicaPageModule {}
