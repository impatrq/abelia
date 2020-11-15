import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InformacionFichaMedicaPage } from './informacion-ficha-medica.page';

describe('InformacionFichaMedicaPage', () => {
  let component: InformacionFichaMedicaPage;
  let fixture: ComponentFixture<InformacionFichaMedicaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformacionFichaMedicaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InformacionFichaMedicaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
