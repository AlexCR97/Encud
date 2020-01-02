import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  
  constructor(private router: Router) {}
  
  ngOnInit() {
    document.getElementById('divNuevaEncuesta').addEventListener('click', (ev) => this.nuevaEncuesta());
    document.getElementById('ibCerrarSesion').addEventListener('click', (ev) => this.cerrarSesion());
  }

  cerrarSesion() {
    console.log('cerrar sesion');

    this.router.navigateByUrl('/login');
  }

  nuevaEncuesta() {
    console.log('nueva encuesta');

    this.router.navigateByUrl('/georeferenciazion');
  }

}
