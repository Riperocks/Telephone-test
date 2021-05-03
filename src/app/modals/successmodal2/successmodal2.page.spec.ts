import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Successmodal2Page } from './successmodal2.page';

describe('Successmodal2Page', () => {
  let component: Successmodal2Page;
  let fixture: ComponentFixture<Successmodal2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Successmodal2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Successmodal2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
