import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EsquemaVacunacionAdultoHomPage } from './esquema-vacunacion-adulto-hom.page';

const routes: Routes = [
  {
    path: '',
    component: EsquemaVacunacionAdultoHomPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EsquemaVacunacionAdultoHomPageRoutingModule {}
