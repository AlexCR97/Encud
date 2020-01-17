import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EsquemaVacunacionAdolPage } from './esquema-vacunacion-adol.page';

const routes: Routes = [
  {
    path: '',
    component: EsquemaVacunacionAdolPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EsquemaVacunacionAdolPageRoutingModule {}
