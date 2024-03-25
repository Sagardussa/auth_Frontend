import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { authGuard } from './services/auth.guard';
// import { ArticleListComponent } from './pages/article-list/article-list.component';
// import { ArticleDetailsComponent } from './pages/article-details/article-details.component';

export const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' }, // redirect to `ArticleListComponent`
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login.component'),
  },
  {
    path: 'register',
    loadComponent: () => import('./pages/register/register.component'),
  },
  {
    path: 'forget-password',
    loadComponent: () =>
      import('./pages/forget-password/forget-password.component'),
  },
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component'),
  },
  {
    path: 'reset/:token',
    loadComponent: () => import('./pages/reset/reset.component'),
  },
  {
    path: 'products',
    loadComponent: () => import('./pages/product-list/product-list.component'),
    canActivate: [authGuard],
  },
  {
    path: 'product/:id',
    loadComponent: () =>
      import('./pages/product-details/product-details.component'),
    canActivate: [authGuard],
  },
  // {
  //   path: 'cart/:userId',
  //   loadComponent: () => import('./pages/cart/cart.component'),
  // },
  {
    path: 'cart',
    loadComponent: () => import('./pages/cart/cart.component'),
  },

  { path: '**', component: PageNotFoundComponent }, // Wildcard route for a 404 page
];
