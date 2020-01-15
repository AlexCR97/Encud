import { Component, OnInit } from '@angular/core';

import { AbstractPage } from 'src/app/utils/abstract-page';
import { Models } from 'src/app/utils/models';
import { ValidatorPool } from 'src/app/validadores/validator-pool';
import { NonEmptyStringValidator } from 'src/app/validadores/non-empty-string-validator';

@Component({
  selector: 'app-esquema-vacunacion-anciano',
  templateUrl: './esquema-vacunacion-anciano.page.html',
  styleUrls: ['./esquema-vacunacion-anciano.page.scss'],
})
export class EsquemaVacunacionAncianoPage extends AbstractPage implements OnInit {
  
  private esquemaVacunacionAnciano1 = Models.esquemaVacunacionAnciano1;
  private esquemaVacunacionAnciano2 = Models.esquemaVacunacionAnciano2;
  private esquemaVacunacionAnciano3 = Models.esquemaVacunacionAnciano3;

  ngOnInit() { }
  
  confirmPageNext(): boolean {
    let vp = new ValidatorPool();

    switch (this.getCurrentPage()) {
      case 1: {
        return true;

        for (let i of this.esquemaVacunacionAnciano1) {
          vp.addValidator(new NonEmptyStringValidator(i.neumococicaUnaDosisAnual), 'Dato invalido: NEUMOCÓCICA POLISACÁRIDA - Una dosis - Anual');

          if (!vp.validateAll()) {
            this.showInvalidPropertyAlert(i.id, vp.getLastMessage());
            return false;
          }
        }
        return true;
      } // case 1

      case 2: {
        return true;

        for (let i of this.esquemaVacunacionAnciano2) {
          vp.addValidator(new NonEmptyStringValidator(i.tdRefuerzoCada10Anios), 'Dato invalido: TD - Refuerzo - Cada 10 años');
          vp.addValidator(new NonEmptyStringValidator(i.tdPrimeraDosisInicial), 'Dato invalido: TD - Primera - Dosis inicial');
          vp.addValidator(new NonEmptyStringValidator(i.tdSegunda1MesDespues), 'Dato invalido: TD - Segunda - 1 mes después de la primera dósis');
          vp.addValidator(new NonEmptyStringValidator(i.tdSegunda12MesesDespues), 'Dato invalido: TD - Segunda - 12 meses después de la primera dósis');

          if (!vp.validateAll()) {
            this.showInvalidPropertyAlert(i.id, vp.getLastMessage());
            return false;
          }
        }
        return true;
      } // case 2

      case 3: {
        return true;

        for (let i of this.esquemaVacunacionAnciano3) {
          vp.addValidator(new NonEmptyStringValidator(i.influenzaUnaDosisAnual), 'Dato invalido: INFLUENZA ESTACIONAL - Una dosis anual');

          if (!vp.validateAll()) {
            this.showInvalidPropertyAlert(i.id, vp.getLastMessage());
            return false;
          }
        }
        return true;
      } // case 3
    }

    return true;
  }

  onSectionPrevious(): void {
    this.navController.pop();
  }

  onSectionNext(): void {
    Models.seccionTerminar('Esquemas de vacunación');
    this.navController.pop();
  }

  pageName(): string {
    return 'esquema-vacunacion-anciano';
  }
  
}
