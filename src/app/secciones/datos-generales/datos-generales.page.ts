import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datos-generales',
  templateUrl: './datos-generales.page.html',
  styleUrls: ['./datos-generales.page.scss'],
})
export class DatosGeneralesPage implements OnInit {

  private pageName = 'datos-generales';

  private readonly people: Array<object> = [
    { id: 'id1' },
    { id: 'id2' },
    { id: 'id3' },
  ];

  constructor() { }

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

  changePage(direction: number) {
    const spCurrentPage = document.getElementById('current-page-' + this.pageName);
    const spPageCount = document.getElementById('page-count-' + this.pageName);
    
    let currentPage = Number(spCurrentPage.innerHTML);
    let pageCount = Number(spPageCount.innerHTML);
    
    currentPage += direction;

    console.log('direction: ' + direction);
    console.log('current page: ' + currentPage);
    console.log('page count: ' + pageCount);

    // go to previous section
    if (currentPage <= 0) {
      this.onSectionPrevious();
      return;
    }

    // go to next section
    if (currentPage > pageCount) {
      this.onSectionNext();
      return;
    }

    // go to next page
    this.setActivePage(currentPage, pageCount);

    // update page counter
    spCurrentPage.innerHTML = currentPage.toString();
  }

  onSectionPrevious() {
    console.log('PREVIOUS section');
  }

  onSectionNext() {
    console.log('NEXT section');
  }

  setActivePage(currentPage: number, pageCount: number) {
    for (let pageNumber = 1; pageNumber <= pageCount; pageNumber++) {
      let pageId = 'page-' + pageNumber + '-' + this.pageName;
      const page = document.getElementById(pageId);

      console.log('Page: ' + page);

      if (pageNumber == currentPage) {
        console.log('Activating page: ' + pageId);
        page.style.display = 'block';
      } else {
        console.log('Deactivating page: ' + pageId);
        page.style.display = 'none';
      }
    }
  }
}
