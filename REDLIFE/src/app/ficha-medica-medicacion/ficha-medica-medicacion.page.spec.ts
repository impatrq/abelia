import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FichaMedicaMedicacionPage } from './ficha-medica-medicacion.page';

describe('FichaMedicaMedicacionPage', () => {
  let component: FichaMedicaMedicacionPage;
  let fixture: ComponentFixture<FichaMedicaMedicacionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FichaMedicaMedicacionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FichaMedicaMedicacionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
