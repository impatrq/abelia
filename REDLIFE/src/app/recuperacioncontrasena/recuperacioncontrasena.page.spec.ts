import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RecuperacioncontrasenaPage } from './recuperacioncontrasena.page';

describe('RecuperacioncontrasenaPage', () => {
  let component: RecuperacioncontrasenaPage;
  let fixture: ComponentFixture<RecuperacioncontrasenaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecuperacioncontrasenaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RecuperacioncontrasenaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
