import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViviendaPageRoutingModule } from './vivienda-routing.module';

import { ViviendaPage } from './vivienda.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViviendaPageRoutingModule
  ],
  declarations: [ViviendaPage]
})
export class ViviendaPageModule {}
