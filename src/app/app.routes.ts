import { Routes } from '@angular/router';
import { AuthLayoutComponent } from './layout/auth-layout/auth-layout.component';
import { BlankLayoutComponent } from './layout/blank-layout/blank-layout.component';
import { authGuard } from './core/guards/auth.guard';
import { loggedGuard } from './core/guards/logged.guard';
import { NotFoundComponent } from './component/not-found/not-found.component';

export const routes: Routes = [
  {
    path: '',
    component: AuthLayoutComponent,
    canActivate: [loggedGuard],
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', loadComponent: () => import('./component/login/login.component').then(c => c.LoginComponent) },
      { path: 'register', loadComponent: () => import('./component/register/register.component').then(c => c.RegisterComponent) },
      { path: 'forgotPassword', loadComponent: () => import('./component/forgot-password/forgot-password.component').then(c => c.ForgotPasswordComponent) },
    ],
  },
  {
    path: '',
    component: BlankLayoutComponent,
    canActivate: [authGuard],
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', loadComponent: () => import('./component/home/home.component').then(c => c.HomeComponent) },
      { path: 'products', loadComponent: () => import('./component/product/product.component').then(c => c.ProductComponent) },
      { path: 'cart', loadComponent: () => import('./component/cart/cart.component').then(c => c.CartComponent) },
      { path: 'brands', loadComponent: () => import('./component/brands/brands.component').then(c => c.BrandsComponent) },
      { path: 'categories', loadComponent: () => import('./component/categories/categories.component').then(c => c.CategoriesComponent) },
      { path: 'details/:id', loadComponent: () => import('./component/details/details.component').then(c => c.DetailsComponent) },
      { path: 'allorders', loadComponent: () => import('./component/all-orders/all-orders.component').then(c => c.AllOrdersComponent) },
      { path: 'orders/:id', loadComponent: () => import('./component/orders/orders.component').then(c => c.OrdersComponent) },
    ],
  },
  { path: '**', component: NotFoundComponent },
];
