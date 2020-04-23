import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LogoregPageRoutingModule } from './logoreg-routing.module';

import { LogoregPage } from './logoreg.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LogoregPageRoutingModule
  ],
  declarations: [LogoregPage]
})
export class LogoregPageModule {}
