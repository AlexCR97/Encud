import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-georeferenciazion',
  templateUrl: './georeferenciazion.page.html',
  styleUrls: ['./georeferenciazion.page.scss'],
})
export class GeoreferenciazionPage implements OnInit {

  private pageName = 'georeferenciazion';

  constructor(private router: Router) { }

  ngOnInit() { }

  numericUpDownClick(direction: number) {
    console.log(direction);

    const pNum = document.getElementById('pNum');
    let count: number = Number(pNum.innerHTML);

    count += direction;

    if (count <= 0) {
      return;
    }

    pNum.innerHTML = count.toString();
  }

  changePage(direction: number) {
    const spCurrentPage = document.getElementById('current-page-' + this.pageName);
    const spPageCount = document.getElementById('page-count-' + this.pageName);
    
    let currentPage = Number(spCurrentPage.innerHTML);
    let pageCount = Number(spPageCount.innerHTML);
    
    currentPage += direction;

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
    this.router.navigateByUrl('/vivienda');
  }

  setActivePage(currentPage: number, pageCount: number) {
    for (let pageNumber = 1; pageNumber <= pageCount; pageNumber++) {
      let pageId = 'page-' + pageNumber + '-' + this.pageName;
      const page = document.getElementById(pageId);

      if (pageNumber == currentPage) {
        page.style.display = 'block';
      } else {
        page.style.display = 'none';
      }
    }
  }

}
