import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LogoregPage } from './logoreg.page';

describe('LogoregPage', () => {
  let component: LogoregPage;
  let fixture: ComponentFixture<LogoregPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogoregPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LogoregPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
