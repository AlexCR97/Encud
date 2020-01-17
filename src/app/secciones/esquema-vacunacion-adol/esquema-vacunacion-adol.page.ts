import { Component, OnInit } from '@angular/core';
import { AbstractPage } from 'src/app/utils/abstract-page';
import { Models } from 'src/app/utils/models';

@Component({
  selector: 'app-esquema-vacunacion-adol',
  templateUrl: './esquema-vacunacion-adol.page.html',
  styleUrls: ['./esquema-vacunacion-adol.page.scss'],
})
export class EsquemaVacunacionAdolPage extends AbstractPage implements OnInit {

  private esquemaVacunacionAdolescente1 = Models.esquemaVacunacionAdolescente1;
  private esquemaVacunacionAdolescente2 = Models.esquemaVacunacionAdolescente2;
  private esquemaVacunacionAdolescente3 = Models.esquemaVacunacionAdolescente3;
  private esquemaVacunacionAdolescente4 = Models.esquemaVacunacionAdolescente4;
  private esquemaVacunacionAdolescente5 = Models.esquemaVacunacionAdolescente5;
  private esquemaVacunacionAdolescente6 = Models.esquemaVacunacionAdolescente6;

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
    return 'esquema-vacunacion-adol';
  }

}
