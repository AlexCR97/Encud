import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AntescedentesPersonalesPageRoutingModule } from './antescedentes-personales-routing.module';

import { AntescedentesPersonalesPage } from './antescedentes-personales.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AntescedentesPersonalesPageRoutingModule
  ],
  declarations: [AntescedentesPersonalesPage]
})
export class AntescedentesPersonalesPageModule {}
