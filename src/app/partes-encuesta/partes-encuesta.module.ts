import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PartesEncuestaPageRoutingModule } from './partes-encuesta-routing.module';

import { PartesEncuestaPage } from './partes-encuesta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PartesEncuestaPageRoutingModule
  ],
  declarations: [PartesEncuestaPage]
})
export class PartesEncuestaPageModule {}
