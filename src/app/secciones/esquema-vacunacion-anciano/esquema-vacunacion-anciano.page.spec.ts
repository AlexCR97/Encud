import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EsquemaVacunacionAncianoPage } from './esquema-vacunacion-anciano.page';

describe('EsquemaVacunacionAncianoPage', () => {
  let component: EsquemaVacunacionAncianoPage;
  let fixture: ComponentFixture<EsquemaVacunacionAncianoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EsquemaVacunacionAncianoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EsquemaVacunacionAncianoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
