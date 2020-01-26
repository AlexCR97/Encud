import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AntescedentesPersonalesPage } from './antescedentes-personales.page';

const routes: Routes = [
  {
    path: '',
    component: AntescedentesPersonalesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AntescedentesPersonalesPageRoutingModule {}
