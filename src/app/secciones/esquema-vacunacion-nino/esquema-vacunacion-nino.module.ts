import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EsquemaVacunacionNinoPageRoutingModule } from './esquema-vacunacion-nino-routing.module';

import { EsquemaVacunacionNinoPage } from './esquema-vacunacion-nino.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EsquemaVacunacionNinoPageRoutingModule
  ],
  declarations: [EsquemaVacunacionNinoPage]
})
export class EsquemaVacunacionNinoPageModule {}
