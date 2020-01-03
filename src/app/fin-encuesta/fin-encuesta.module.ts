import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FinEncuestaPageRoutingModule } from './fin-encuesta-routing.module';

import { FinEncuestaPage } from './fin-encuesta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FinEncuestaPageRoutingModule
  ],
  declarations: [FinEncuestaPage]
})
export class FinEncuestaPageModule {}
