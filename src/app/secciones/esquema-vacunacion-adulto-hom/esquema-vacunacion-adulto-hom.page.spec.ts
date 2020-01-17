import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EsquemaVacunacionAdultoHomPage } from './esquema-vacunacion-adulto-hom.page';

describe('EsquemaVacunacionAdultoHomPage', () => {
  let component: EsquemaVacunacionAdultoHomPage;
  let fixture: ComponentFixture<EsquemaVacunacionAdultoHomPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EsquemaVacunacionAdultoHomPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EsquemaVacunacionAdultoHomPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
