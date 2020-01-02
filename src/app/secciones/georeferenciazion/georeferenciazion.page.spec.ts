import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GeoreferenciazionPage } from './georeferenciazion.page';

describe('GeoreferenciazionPage', () => {
  let component: GeoreferenciazionPage;
  let fixture: ComponentFixture<GeoreferenciazionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeoreferenciazionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GeoreferenciazionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
