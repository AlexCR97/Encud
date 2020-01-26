import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AntescedentesHeredofamiliaresPage } from './antescedentes-heredofamiliares.page';

describe('AntescedentesHeredofamiliaresPage', () => {
  let component: AntescedentesHeredofamiliaresPage;
  let fixture: ComponentFixture<AntescedentesHeredofamiliaresPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AntescedentesHeredofamiliaresPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AntescedentesHeredofamiliaresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
