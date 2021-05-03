import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewsviewPage } from './newsview.page';

describe('NewsviewPage', () => {
  let component: NewsviewPage;
  let fixture: ComponentFixture<NewsviewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsviewPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewsviewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
