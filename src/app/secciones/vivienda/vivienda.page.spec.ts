import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViviendaPage } from './vivienda.page';

describe('ViviendaPage', () => {
  let component: ViviendaPage;
  let fixture: ComponentFixture<ViviendaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViviendaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViviendaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
