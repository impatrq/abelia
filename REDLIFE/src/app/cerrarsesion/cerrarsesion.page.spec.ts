import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CerrarsesionPage } from './cerrarsesion.page';

describe('CerrarsesionPage', () => {
  let component: CerrarsesionPage;
  let fixture: ComponentFixture<CerrarsesionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CerrarsesionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CerrarsesionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
