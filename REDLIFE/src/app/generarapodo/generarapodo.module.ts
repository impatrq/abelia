import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GenerarapodoPageRoutingModule } from './generarapodo-routing.module';

import { GenerarapodoPage } from './generarapodo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GenerarapodoPageRoutingModule
  ],
  declarations: [GenerarapodoPage]
})
export class GenerarapodoPageModule {}
