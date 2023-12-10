import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductFormContainerComponent } from './product-form-container.component';

describe('ProductFormContainerComponent', () => {
  let component: ProductFormContainerComponent;
  let fixture: ComponentFixture<ProductFormContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductFormContainerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductFormContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
