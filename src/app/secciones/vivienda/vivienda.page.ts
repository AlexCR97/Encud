import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vivienda',
  templateUrl: './vivienda.page.html',
  styleUrls: ['./vivienda.page.scss'],
})
export class ViviendaPage implements OnInit {

  private pageName = 'vivienda';

  constructor(private router: Router) { }

  ngOnInit() { }

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
    this.router.navigateByUrl('/datos-generales');
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
