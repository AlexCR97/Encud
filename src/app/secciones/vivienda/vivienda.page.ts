import { Component, OnInit } from '@angular/core';

import { AbstractPage } from 'src/app/utils/abstract-page';
import { Models } from 'src/app/utils/models';

@Component({
  selector: 'app-vivienda',
  templateUrl: './vivienda.page.html',
  styleUrls: ['./vivienda.page.scss'],
})
export class ViviendaPage extends AbstractPage implements OnInit {
  
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

  confirmPageNext(): boolean {
    switch (this.getCurrentPage()) {
      case 3: {
        const pNum = document.getElementById('pNum');
        let count: number = Number(pNum.innerHTML);

        Models.setCount(count);

        return true;
      }
    }
    return true;
  }

  onSectionPrevious(): void { }

  onSectionNext(): void {
    this.router.navigateByUrl('/datos-generales');
  }

  pageName(): string {
    return 'vivienda';
  }

}
