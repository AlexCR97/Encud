import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Models } from 'src/app/utils/models';

@Component({
  selector: 'app-partes-encuesta',
  templateUrl: './partes-encuesta.page.html',
  styleUrls: ['./partes-encuesta.page.scss'],
})
export class PartesEncuestaPage implements OnInit {

  private secciones = Models.secciones;

  constructor(private router: Router) { }

  ngOnInit() { }

  abrirSeccion(color: string, ruta: string) {
    if (color == 'black') {
      this.router.navigateByUrl(ruta);
    }
  }

  terminarEncuesta() {
    this.router.navigateByUrl('/fin-encuesta');

    if (Models.verificarEncuesta()) {
      console.log('Encuesta terminada');
    } else {
      console.log('Encuesta no terminada');
    }
  }
}
