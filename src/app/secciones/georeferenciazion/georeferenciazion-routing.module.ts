import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GeoreferenciazionPage } from './georeferenciazion.page';

const routes: Routes = [
  {
    path: '',
    component: GeoreferenciazionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GeoreferenciazionPageRoutingModule {}
