import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AbstractPage } from 'src/app/utils/abstract-page';
import { Data } from 'src/app/utils/data';

@Component({
  selector: 'app-datos-generales',
  templateUrl: './datos-generales.page.html',
  styleUrls: ['./datos-generales.page.scss'],
})
export class DatosGeneralesPage extends AbstractPage implements OnInit {

  private people = Data.people;

  constructor(private router: Router) {
    super();
  }

  ngOnInit() { }
  
  onSectionPrevious(): void { }

  onSectionNext(): void {
    this.router.navigateByUrl('/esquema-vacunacion-anciano');
  }

  pageName(): string {
    return 'datos-generales';
  }

}
