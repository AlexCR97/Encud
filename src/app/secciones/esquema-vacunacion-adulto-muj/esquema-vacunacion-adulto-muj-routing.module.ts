import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EsquemaVacunacionAdultoMujPage } from './esquema-vacunacion-adulto-muj.page';

const routes: Routes = [
  {
    path: '',
    component: EsquemaVacunacionAdultoMujPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EsquemaVacunacionAdultoMujPageRoutingModule {}
