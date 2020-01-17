import { Component, OnInit } from '@angular/core';
import { AbstractPage } from 'src/app/utils/abstract-page';
import { Models } from 'src/app/utils/models';

@Component({
  selector: 'app-esquema-vacunacion-nino',
  templateUrl: './esquema-vacunacion-nino.page.html',
  styleUrls: ['./esquema-vacunacion-nino.page.scss'],
})
export class EsquemaVacunacionNinoPage extends AbstractPage implements OnInit {
  
  private esquemaVacunacionNino1 = Models.esquemaVacunacionNino1;
  private esquemaVacunacionNino2 = Models.esquemaVacunacionNino2;
  private esquemaVacunacionNino3 = Models.esquemaVacunacionNino3;
  private esquemaVacunacionNino4 = Models.esquemaVacunacionNino4;

  ngOnInit() { }

  confirmPageNext(): boolean {
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
    return 'esquema-vacunacion-nino';
  }

}
