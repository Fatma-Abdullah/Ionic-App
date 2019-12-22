import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SingleProductPage } from './single-product.page';

describe('SingleProductPage', () => {
  let component: SingleProductPage;
  let fixture: ComponentFixture<SingleProductPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleProductPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SingleProductPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
