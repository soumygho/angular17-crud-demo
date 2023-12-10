import { Component } from '@angular/core';
import { ProductFormComponentComponent } from '../../components/product-form-component/product-form-component.component';

@Component({
  selector: 'app-product-form-container',
  standalone: true,
  imports: [ProductFormComponentComponent],
  templateUrl: './product-form-container.component.html',
  styleUrl: './product-form-container.component.scss'
})
export class ProductFormContainerComponent {

}
