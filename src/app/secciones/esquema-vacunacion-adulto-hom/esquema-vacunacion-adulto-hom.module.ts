import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EsquemaVacunacionAdultoHomPageRoutingModule } from './esquema-vacunacion-adulto-hom-routing.module';

import { EsquemaVacunacionAdultoHomPage } from './esquema-vacunacion-adulto-hom.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EsquemaVacunacionAdultoHomPageRoutingModule
  ],
  declarations: [EsquemaVacunacionAdultoHomPage]
})
export class EsquemaVacunacionAdultoHomPageModule {}
