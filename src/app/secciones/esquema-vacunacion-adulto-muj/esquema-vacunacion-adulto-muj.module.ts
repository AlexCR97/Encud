import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EsquemaVacunacionAdultoMujPageRoutingModule } from './esquema-vacunacion-adulto-muj-routing.module';

import { EsquemaVacunacionAdultoMujPage } from './esquema-vacunacion-adulto-muj.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EsquemaVacunacionAdultoMujPageRoutingModule
  ],
  declarations: [EsquemaVacunacionAdultoMujPage]
})
export class EsquemaVacunacionAdultoMujPageModule {}
