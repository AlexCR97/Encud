import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EsquemaVacunacionAncianoPage } from './esquema-vacunacion-anciano.page';

const routes: Routes = [
  {
    path: '',
    component: EsquemaVacunacionAncianoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EsquemaVacunacionAncianoPageRoutingModule {}
