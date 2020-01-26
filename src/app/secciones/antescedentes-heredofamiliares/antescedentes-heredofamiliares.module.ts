import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AntescedentesHeredofamiliaresPageRoutingModule } from './antescedentes-heredofamiliares-routing.module';

import { AntescedentesHeredofamiliaresPage } from './antescedentes-heredofamiliares.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AntescedentesHeredofamiliaresPageRoutingModule
  ],
  declarations: [AntescedentesHeredofamiliaresPage]
})
export class AntescedentesHeredofamiliaresPageModule {}
