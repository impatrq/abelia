import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FichaMedicaEnfermedadesPage } from './ficha-medica-enfermedades.page';

describe('FichaMedicaEnfermedadesPage', () => {
  let component: FichaMedicaEnfermedadesPage;
  let fixture: ComponentFixture<FichaMedicaEnfermedadesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FichaMedicaEnfermedadesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FichaMedicaEnfermedadesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
