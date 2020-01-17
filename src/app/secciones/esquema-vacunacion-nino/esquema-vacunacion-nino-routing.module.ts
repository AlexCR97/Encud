import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EsquemaVacunacionNinoPage } from './esquema-vacunacion-nino.page';

const routes: Routes = [
  {
    path: '',
    component: EsquemaVacunacionNinoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EsquemaVacunacionNinoPageRoutingModule {}
