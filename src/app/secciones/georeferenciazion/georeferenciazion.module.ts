import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GeoreferenciazionPageRoutingModule } from './georeferenciazion-routing.module';

import { GeoreferenciazionPage } from './georeferenciazion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GeoreferenciazionPageRoutingModule
  ],
  declarations: [GeoreferenciazionPage]
})
export class GeoreferenciazionPageModule {}
