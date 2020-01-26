import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AntescedentesPersonalesPage } from './antescedentes-personales.page';

describe('AntescedentesPersonalesPage', () => {
  let component: AntescedentesPersonalesPage;
  let fixture: ComponentFixture<AntescedentesPersonalesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AntescedentesPersonalesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AntescedentesPersonalesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
