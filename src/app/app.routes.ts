import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/home/home.component')
  },
  {
    path: 'products',
    loadComponent: () => import('./features/products/products.component')
  },
  {
    path: 'products/:id',
    loadComponent: () => import('./features/products/product-detail/product-detail.component')
  },
  {
    path: 'cart',
    loadComponent: () => import('./features/cart/cart.component')
  },
  {
    path: 'checkout',
    loadComponent: () => import('./features/checkout/checkout.component')
  }
];
