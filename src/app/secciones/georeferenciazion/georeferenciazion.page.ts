import { Component, OnInit } from '@angular/core';

import { AbstractPage } from 'src/app/utils/abstract-page';
import { Data } from 'src/app/utils/data';
import { NonEmptyStringValidator } from 'src/app/validadores/non-empty-string-validator';
import { ValidatorPool } from 'src/app/validadores/validator-pool';
import { UnsignedIntegerValidator } from 'src/app/validadores/unsigned-integer-validator';
import { Models } from 'src/app/utils/models';

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

  ngOnInit() { }

  confirmPageNext(): boolean {
    let currentPage = this.getCurrentPage();
    let validatorPool = new ValidatorPool();

    switch (currentPage) {
      case 1: {
        return true;

        validatorPool.addValidator(new NonEmptyStringValidator(this.jurisdiccion), 'Debes elegir una jurisdiccion');
        validatorPool.addValidator(new NonEmptyStringValidator(this.municipio), 'Debes eligir un municipio');
        validatorPool.addValidator(new NonEmptyStringValidator(this.centroDeSalud), 'Debes eligir un centro de salud');

        if (!validatorPool.validateAll()) {
          this.showAlert('Propiedad invalida', validatorPool.getLastMessage());
          return false;
        }
        return true;
      } // case 1

      case 2: {
        return true;

        validatorPool.addValidator(new UnsignedIntegerValidator(this.codigoPostal), 'Debes ingresar un codigo postal');
        validatorPool.addValidator(new NonEmptyStringValidator(this.localidad), 'Debes eligir una localidad');
        validatorPool.addValidator(new NonEmptyStringValidator(this.calle), 'Debes ingresar una calle');
        validatorPool.addValidator(new UnsignedIntegerValidator(this.numExt), 'Debes ingresar un numero exterior');
        validatorPool.addValidator(new UnsignedIntegerValidator(this.telefono), 'Debes ingresar un numero de telefono');

        if (!validatorPool.validateAll()) {
          this.showAlert('Propiedad invalida', validatorPool.getLastMessage());
          return false;
        }
        return true;
      } // case 2
    }

    return true;
  }

  onSectionPrevious(): void {
    this.navController.pop();
  }
  
  onSectionNext(): void {
    Models.seccionTerminar('Georeferenciazión');
    Models.seccionPendiente('Vivienda');
    this.navController.pop();
  }

  pageName(): string {
    return 'georeferenciazion';
  }
  
}
