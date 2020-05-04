import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FichaMedicaPage } from './ficha-medica.page';

describe('FichaMedicaPage', () => {
  let component: FichaMedicaPage;
  let fixture: ComponentFixture<FichaMedicaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FichaMedicaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FichaMedicaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
