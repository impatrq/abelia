import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InstruccionesFichaMedicaPage } from './instrucciones-ficha-medica.page';

describe('InstruccionesFichaMedicaPage', () => {
  let component: InstruccionesFichaMedicaPage;
  let fixture: ComponentFixture<InstruccionesFichaMedicaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstruccionesFichaMedicaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InstruccionesFichaMedicaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
