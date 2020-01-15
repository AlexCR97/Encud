import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PartesEncuestaPage } from './partes-encuesta.page';

const routes: Routes = [
  {
    path: '',
    component: PartesEncuestaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PartesEncuestaPageRoutingModule {}
