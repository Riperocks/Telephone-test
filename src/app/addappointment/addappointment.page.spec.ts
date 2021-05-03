import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddappointmentPage } from './addappointment.page';

describe('AddappointmentPage', () => {
  let component: AddappointmentPage;
  let fixture: ComponentFixture<AddappointmentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddappointmentPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddappointmentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
