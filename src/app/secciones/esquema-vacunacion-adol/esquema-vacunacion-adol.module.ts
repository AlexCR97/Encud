import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EsquemaVacunacionAdolPageRoutingModule } from './esquema-vacunacion-adol-routing.module';

import { EsquemaVacunacionAdolPage } from './esquema-vacunacion-adol.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EsquemaVacunacionAdolPageRoutingModule
  ],
  declarations: [EsquemaVacunacionAdolPage]
})
export class EsquemaVacunacionAdolPageModule {}
