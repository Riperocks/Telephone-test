import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CartmodalPage } from './cartmodal.page';

describe('CartmodalPage', () => {
  let component: CartmodalPage;
  let fixture: ComponentFixture<CartmodalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartmodalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CartmodalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
