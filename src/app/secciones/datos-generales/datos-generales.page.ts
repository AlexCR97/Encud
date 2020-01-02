import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AbstractPage } from 'src/app/utils/abstract-page';

@Component({
  selector: 'app-datos-generales',
  templateUrl: './datos-generales.page.html',
  styleUrls: ['./datos-generales.page.scss'],
})
export class DatosGeneralesPage extends AbstractPage implements OnInit {

  private readonly people: Array<object> = [
    { id: 'id1' },
    { id: 'id2' },
    { id: 'id3' },
  ];
  
  constructor(private router: Router) {
    super();
  }

  ngOnInit() { }

  cambiarHabilitado(idContainer: string) {
    const container = document.getElementById(idContainer);
    let elements = container.getElementsByTagName('ion-item');

    for (let i = 0; i < elements.length; i++) {
      elements[i].disabled = !elements[i].disabled;
    }
  }

  confirmarElementos(part: string, personId: string) {
    let divId = part + ':' + personId;

    console.log("Confirmando: " + divId);

    this.cambiarHabilitado(divId);
  }

  desplegarElementos(part: string, personId: string) {
    let divId = part + ':' + personId;

    console.log("Desplegando: " + divId);

    const divDesplegarItems = document.getElementById(divId);

    if (divDesplegarItems.style.display == 'none') {
      divDesplegarItems.style.display = 'block';
    }
    else {
      divDesplegarItems.style.display = 'none';
    }
  }
  
  onSectionPrevious(): void { }

  onSectionNext(): void { }

  pageName(): string {
    return 'datos-generales';
  }

}
