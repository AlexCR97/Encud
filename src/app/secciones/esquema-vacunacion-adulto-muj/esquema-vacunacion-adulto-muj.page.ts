import { Component, OnInit } from '@angular/core';
import { AbstractPage } from 'src/app/utils/abstract-page';
import { Models } from 'src/app/utils/models';

@Component({
  selector: 'app-esquema-vacunacion-adulto-muj',
  templateUrl: './esquema-vacunacion-adulto-muj.page.html',
  styleUrls: ['./esquema-vacunacion-adulto-muj.page.scss'],
})
export class EsquemaVacunacionAdultoMujPage extends AbstractPage implements OnInit {

  private esquemaVacunacionAdultoMujer1  = Models.esquemaVacunacionAdultoMujer1;
  private esquemaVacunacionAdultoMujer2  = Models.esquemaVacunacionAdultoMujer2;
  private esquemaVacunacionAdultoMujer3  = Models.esquemaVacunacionAdultoMujer3;
  private esquemaVacunacionAdultoMujer4  = Models.esquemaVacunacionAdultoMujer4;

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
    return 'esquema-vacunacion-adulto-muj';
  }

}
