import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FinEncuestaPage } from './fin-encuesta.page';

const routes: Routes = [
  {
    path: '',
    component: FinEncuestaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FinEncuestaPageRoutingModule {}
