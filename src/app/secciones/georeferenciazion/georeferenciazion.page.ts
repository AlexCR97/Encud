import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AbstractPage } from 'src/app/utils/abstract-page';

@Component({
  selector: 'app-georeferenciazion',
  templateUrl: './georeferenciazion.page.html',
  styleUrls: ['./georeferenciazion.page.scss'],
})
export class GeoreferenciazionPage extends AbstractPage implements OnInit {
  
  constructor(private router: Router) {
    super();
  }
  
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

  onSectionPrevious(): void { }
  
  onSectionNext(): void {
    this.router.navigateByUrl('/vivienda');
  }

  pageName(): string {
    return 'georeferenciazion';
  }

}
