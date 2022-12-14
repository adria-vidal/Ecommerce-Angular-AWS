import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './elements/navbar/navbar.component';
import { CategoriesComponent } from './elements/categories/categories.component';
import { ArticulosComponent } from './elements/articulos/articulos.component';
import { DetailProductComponent } from './elements/detail-product/detail-product.component';
import { FooterComponent } from './elements/footer/footer.component';
import { AboutComponent } from './elements/about/about.component';
import { ContactComponent } from './elements/contact/contact.component';
import { RegisterComponent } from './elements/register/register.component';
import { LoginComponent } from './elements/login/login.component';
import { ProfileComponent } from './elements/profile/profile.component';
import { NavShopComponent } from './shopping-cart/nav-shop/nav-shop.component';

import { CartComponent } from './shopping-cart/cart/cart.component';

import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';


const routes: Routes = [
  { path: '', redirectTo: 'categories', pathMatch: 'full' },
  {
    //GUARD: para capar un componente y te envie a otro
    path: 'profile',
    component: ProfileComponent,
    ...canActivate(() => redirectUnauthorizedTo(['/login'])),
  },
  {
    path: 'navbar',
    component: NavbarComponent,
  },
  {
    path: 'categories',
    component: CategoriesComponent,
  },
  {
    path: 'articulos/:id',
    component: ArticulosComponent,
  },
  {
    path: 'detail/:id',
    component: DetailProductComponent,
  },
  {
    path: 'footer',
    component: FooterComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'profile',
    component: ProfileComponent,
  },
  {
    path: 'nav-shop',
    component: NavShopComponent,
  },
  {
    path: 'cart',
    component: CartComponent,
  },

];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
