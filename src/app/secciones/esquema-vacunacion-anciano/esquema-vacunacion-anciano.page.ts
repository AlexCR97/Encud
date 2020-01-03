import { Component, OnInit } from '@angular/core';
import { AbstractPage } from 'src/app/utils/abstract-page';
import { Data } from 'src/app/utils/data';

@Component({
  selector: 'app-esquema-vacunacion-anciano',
  templateUrl: './esquema-vacunacion-anciano.page.html',
  styleUrls: ['./esquema-vacunacion-anciano.page.scss'],
})
export class EsquemaVacunacionAncianoPage extends AbstractPage implements OnInit {
  
  private people = Data.people;

  constructor() {
    super();
  }
  
  ngOnInit() { }
  
  onSectionPrevious(): void {
    throw new Error("Method not implemented.");
  }

  onSectionNext(): void {
    throw new Error("Method not implemented.");
  }

  pageName(): string {
    return 'esquema-vacunacion-anciano';
  }
  
}
