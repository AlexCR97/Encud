import { Component, OnInit } from '@angular/core';
import { AbstractPage } from 'src/app/utils/abstract-page';
import { Models } from 'src/app/utils/models';

@Component({
  selector: 'app-esquema-vacunacion-adulto-hom',
  templateUrl: './esquema-vacunacion-adulto-hom.page.html',
  styleUrls: ['./esquema-vacunacion-adulto-hom.page.scss'],
})
export class EsquemaVacunacionAdultoHomPage extends AbstractPage implements OnInit {

  private esquemaVacunacionAdultoHombre1 = Models.esquemaVacunacionAdultoHombre1;
  private esquemaVacunacionAdultoHombre2 = Models.esquemaVacunacionAdultoHombre2;
  private esquemaVacunacionAdultoHombre3 = Models.esquemaVacunacionAdultoHombre3;

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
    return 'esquema-vacunacion-adulto-hom';
  }

}
