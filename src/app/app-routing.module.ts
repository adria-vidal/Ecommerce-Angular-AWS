import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './elements/navbar/navbar.component';
import { CategoriesComponent } from './elements/categories/categories.component';
import { ArticulosComponent } from './elements/articulos/articulos.component';
import { DetailProductComponent } from './elements/detail-product/detail-product.component';

const routes: Routes = [
  { path: '', redirectTo: 'categories', pathMatch: 'full' },
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
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
