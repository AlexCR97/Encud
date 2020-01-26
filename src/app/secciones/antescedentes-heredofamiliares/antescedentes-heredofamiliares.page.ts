import { Component, OnInit } from '@angular/core';
import { AbstractPage } from 'src/app/utils/abstract-page';
import { Models } from 'src/app/utils/models';
import { Data } from 'src/app/utils/data';

@Component({
  selector: 'app-antescedentes-heredofamiliares',
  templateUrl: './antescedentes-heredofamiliares.page.html',
  styleUrls: ['./antescedentes-heredofamiliares.page.scss'],
})
export class AntescedentesHeredofamiliaresPage extends AbstractPage implements OnInit {

  private antescedentesHeredofamiliares1 = Models.antescedentesHeredofamiliares1;
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
    return 'antescedentes-heredofamiliares';
  }

}
