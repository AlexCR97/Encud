import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EsquemaVacunacionAdultoMujPage } from './esquema-vacunacion-adulto-muj.page';

describe('EsquemaVacunacionAdultoMujPage', () => {
  let component: EsquemaVacunacionAdultoMujPage;
  let fixture: ComponentFixture<EsquemaVacunacionAdultoMujPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EsquemaVacunacionAdultoMujPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EsquemaVacunacionAdultoMujPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
