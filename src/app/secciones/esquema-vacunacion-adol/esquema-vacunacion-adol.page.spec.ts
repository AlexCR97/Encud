import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EsquemaVacunacionAdolPage } from './esquema-vacunacion-adol.page';

describe('EsquemaVacunacionAdolPage', () => {
  let component: EsquemaVacunacionAdolPage;
  let fixture: ComponentFixture<EsquemaVacunacionAdolPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EsquemaVacunacionAdolPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EsquemaVacunacionAdolPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
