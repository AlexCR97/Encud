import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AbstractPage } from 'src/app/utils/abstract-page';
import { Data } from 'src/app/utils/data';
import { NonEmptyStringValidator } from 'src/app/validadores/non-empty-string-validator';

@Component({
  selector: 'app-georeferenciazion',
  templateUrl: './georeferenciazion.page.html',
  styleUrls: ['./georeferenciazion.page.scss'],
})
export class GeoreferenciazionPage extends AbstractPage implements OnInit {
  
  //#region page 1 data
  private readonly jurisdicciones = Data.jurisdicciones;
  private readonly municipios = Data.municipios;
  private readonly centrosDeSalud = Data.centrosDeSalud;

  private jurisdiccion: string;
  private municipio: string;
  private centroDeSalud: string;
  //#endregion

  //#region page 2 data
  private readonly localidades = Data.localidades;

  private codigoPostal: number;
  private localidad: string;
  private calle: string;
  private numExt: number;
  private numInt: number;
  private telefono: number;
  private referenciaUbicacion: string;
  //#endregion

  constructor(private router: Router) {
    super();
  }
  
  ngOnInit() { }

  numericUpDownClick(direction: number) {
    console.log(direction);

    const pNum = document.getElementById('pNum');
    let count: number = Number(pNum.innerHTML);

    count += direction;

    if (count <= 0) {
      return;
    }

    pNum.innerHTML = count.toString();
  }

  confirmPageNext(): boolean {
    let currentPage = this.getCurrentPage();

    switch (currentPage) {
      case 1: {
        if (this.jurisdiccion == undefined) {
          console.log('jurisdiccion is undefined');
          return false;
        }

        if (this.municipio == undefined) {
          console.log('municipio is undefined');
          return false;
        }

        if (this.centroDeSalud == undefined) {
          console.log('centroDeSalud is undefined');
          return false;
        }

        console.log('jurisdiccion: ' + this.jurisdiccion);
        console.log('municipio: ' + this.municipio);
        console.log('centro de salud: ' + this.centroDeSalud);

        return true;
      }

      case 2: {

        let localidadValidator = new NonEmptyStringValidator(this.localidad);

        if (!localidadValidator.validate()) {
          console.log(localidadValidator.getLastError().errorMessage());
          return false;
        }

        console.log('codigo postal: ' + this.codigoPostal);
        console.log('localidad o colonia: ' + this.localidad);
        console.log('calle: ' + this.calle);
        console.log('numero exterior: ' + this.numExt);
        console.log('numero interior: ' + this.numInt);
        console.log('telefono: ' + this.telefono);
        console.log('referencia de ubicacion: ' + this.referenciaUbicacion);

        return true;
      }
    }

    return true;
  }

  onSectionPrevious(): void { }
  
  onSectionNext(): void {
    this.router.navigateByUrl('/vivienda');
  }

  pageName(): string {
    return 'georeferenciazion';
  }
  
}
