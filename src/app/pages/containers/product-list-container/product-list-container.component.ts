import { Component } from '@angular/core';
import { ProductTableComponentComponent } from '../../components/product-table-component/product-table-component.component';

@Component({
  selector: 'app-product-list-container',
  standalone: true,
  imports: [ProductTableComponentComponent],
  templateUrl: './product-list-container.component.html',
  styleUrl: './product-list-container.component.scss'
})
export class ProductListContainerComponent {

}
