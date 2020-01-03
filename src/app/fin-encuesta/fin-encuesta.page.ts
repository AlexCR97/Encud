import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fin-encuesta',
  templateUrl: './fin-encuesta.page.html',
  styleUrls: ['./fin-encuesta.page.scss'],
})
export class FinEncuestaPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() { }

  nuevaEncuesta() {
    console.log('nueva encuesta');
  }

  regresarAlInicio() {
    this.router.navigateByUrl('/home');
  }

}
