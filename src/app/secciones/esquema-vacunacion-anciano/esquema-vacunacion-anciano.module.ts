import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EsquemaVacunacionAncianoPageRoutingModule } from './esquema-vacunacion-anciano-routing.module';

import { EsquemaVacunacionAncianoPage } from './esquema-vacunacion-anciano.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EsquemaVacunacionAncianoPageRoutingModule
  ],
  declarations: [EsquemaVacunacionAncianoPage]
})
export class EsquemaVacunacionAncianoPageModule {}
