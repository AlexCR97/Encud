import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'georeferenciazion',
    loadChildren: () => import('./secciones/georeferenciazion/georeferenciazion.module').then( m => m.GeoreferenciazionPageModule)
  },
  {
    path: 'datos-generales',
    loadChildren: () => import('./secciones/datos-generales/datos-generales.module').then( m => m.DatosGeneralesPageModule)
  },
  {
    path: 'vivienda',
    loadChildren: () => import('./secciones/vivienda/vivienda.module').then( m => m.ViviendaPageModule)
  },
  {
    path: 'fin-encuesta',
    loadChildren: () => import('./fin-encuesta/fin-encuesta.module').then( m => m.FinEncuestaPageModule)
  },
  {
    path: 'esquema-vacunacion-anciano',
    loadChildren: () => import('./secciones/esquema-vacunacion-anciano/esquema-vacunacion-anciano.module').then( m => m.EsquemaVacunacionAncianoPageModule)
  },
  {
    path: 'partes-encuesta',
    loadChildren: () => import('./partes-encuesta/partes-encuesta.module').then( m => m.PartesEncuestaPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
