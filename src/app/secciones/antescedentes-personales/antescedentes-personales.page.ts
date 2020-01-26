import { Component, OnInit } from '@angular/core';
import { AbstractPage } from 'src/app/utils/abstract-page';
import { Models } from 'src/app/utils/models';
import { Data } from 'src/app/utils/data';

@Component({
  selector: 'app-antescedentes-personales',
  templateUrl: './antescedentes-personales.page.html',
  styleUrls: ['./antescedentes-personales.page.scss'],
})
export class AntescedentesPersonalesPage extends AbstractPage implements OnInit {

  private antescedentesPersonales1 = Models.antescedentesPersonales1;
  private antescedentesPersonales2 = Models.antescedentesPersonales2;
  private antescedentesPersonales3 = Models.antescedentesPersonales3;
  private enfermedades = Data.enfermedades;

  ngOnInit() { }

  confirmPageNext(): boolean {
    return true;
  }

  onSectionPrevious(): void {
    this.navController.pop();
  }

  onSectionNext(): void {
    //Models.seccionTerminar('Datos generales de la familia');
    //Models.seccionPendiente('Esquemas de vacunación');
    this.navController.pop();
  }

  pageName(): string {
    return 'antescedentes-personales';
  }

}
