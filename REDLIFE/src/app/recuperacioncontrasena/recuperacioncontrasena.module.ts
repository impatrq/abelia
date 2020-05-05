import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecuperacioncontrasenaPageRoutingModule } from './recuperacioncontrasena-routing.module';

import { RecuperacioncontrasenaPage } from './recuperacioncontrasena.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecuperacioncontrasenaPageRoutingModule
  ],
  declarations: [RecuperacioncontrasenaPage]
})
export class RecuperacioncontrasenaPageModule {}
