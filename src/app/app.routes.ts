import { Routes } from '@angular/router';
import { ProductFormContainerComponent } from './pages/containers/product-form-container/product-form-container.component';
import { ProductListContainerComponent } from './pages/containers/product-list-container/product-list-container.component';

export const routes: Routes = [
  {
    path: 'add',
    component: ProductFormContainerComponent
  },
  {
    path: 'list',
    component: ProductListContainerComponent,
  },
  {
    path: '',
    redirectTo: '/list',
    pathMatch: 'full'
  }
];
