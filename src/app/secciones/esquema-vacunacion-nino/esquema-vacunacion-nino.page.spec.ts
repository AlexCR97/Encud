import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EsquemaVacunacionNinoPage } from './esquema-vacunacion-nino.page';

describe('EsquemaVacunacionNinoPage', () => {
  let component: EsquemaVacunacionNinoPage;
  let fixture: ComponentFixture<EsquemaVacunacionNinoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EsquemaVacunacionNinoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EsquemaVacunacionNinoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
