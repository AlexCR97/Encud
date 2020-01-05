import { Component, OnInit } from '@angular/core';

import { AbstractPage } from 'src/app/utils/abstract-page';
import { Models } from 'src/app/utils/models';
import { ValidatorPool } from 'src/app/validadores/validator-pool';
import { NonEmptyStringValidator } from 'src/app/validadores/non-empty-string-validator';
import { UnsignedIntegerValidator } from 'src/app/validadores/unsigned-integer-validator';

@Component({
  selector: 'app-datos-generales',
  templateUrl: './datos-generales.page.html',
  styleUrls: ['./datos-generales.page.scss'],
})
export class DatosGeneralesPage extends AbstractPage implements OnInit {

  private datosGenerales1 = Models.datosGenerales1;
  private datosGenerales2 = Models.datosGenerales2;

  ngOnInit() { }

  confirmPageNext(): boolean {
    let vp = new ValidatorPool();

    switch (this.getCurrentPage()) {
      case 1: {
        for (let i of this.datosGenerales1) {
          vp.addValidator(new NonEmptyStringValidator(i.apellidoPaterno), 'Apellido paterno invalido');
          vp.addValidator(new NonEmptyStringValidator(i.apellidoMaterno), 'Apellido materno invalido');
          vp.addValidator(new NonEmptyStringValidator(i.nombres), 'Nombre(s) invalido(s)');
          vp.addValidator(new NonEmptyStringValidator(i.sexo), 'Sexo invalido');
          vp.addValidator(new NonEmptyStringValidator(i.curp), 'CURP invalido');
          vp.addValidator(new NonEmptyStringValidator(i.fechaNacimiento), 'Fecha de nacimiento invalida');

          if (!vp.validateAll()) {
            this.showInvalidPropertyAlert(i.id, vp.getLastMessage());
            return false;
          }
        }
        return true;
      } // case 1

      case 2: {
        for (let i of this.datosGenerales2) {
          vp.addValidator(new UnsignedIntegerValidator(i.edad), 'Edad invalida');
          vp.addValidator(new NonEmptyStringValidator(i.ocupacion), 'Ocupacion invalida');
          vp.addValidator(new NonEmptyStringValidator(i.estadoCivil), 'Estado civil invalido');
          vp.addValidator(new NonEmptyStringValidator(i.nacionalidad), 'Nacionalidad invalida');
          vp.addValidator(new NonEmptyStringValidator(i.residenciaAnterior), 'Residencia anterior invalida');
          vp.addValidator(new NonEmptyStringValidator(i.ultimoGradoEstudios), 'Ultimo grado de estudios invalido');

          if (!vp.validateAll()) {
            this.showInvalidPropertyAlert(i.id, vp.getLastMessage());
            return false;
          }
        }
        return true;
      } // case 2
    }

    return true;
  }

  onSectionPrevious(): void { }

  onSectionNext(): void {
    this.router.navigateByUrl('/esquema-vacunacion-anciano');
  }

  pageName(): string {
    return 'datos-generales';
  }

}
