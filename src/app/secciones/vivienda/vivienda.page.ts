import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AbstractPage } from 'src/app/utils/abstract-page';

@Component({
  selector: 'app-vivienda',
  templateUrl: './vivienda.page.html',
  styleUrls: ['./vivienda.page.scss'],
})
export class ViviendaPage extends AbstractPage implements OnInit {
  
  constructor(private router: Router) {
    super();
  }
  
  ngOnInit() { }
  
  onSectionPrevious(): void { }

  onSectionNext(): void {
    this.router.navigateByUrl('/datos-generales');
  }

  pageName(): string {
    return 'vivienda';
  }

}
