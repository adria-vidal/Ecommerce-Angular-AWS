import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { CategoriesComponent } from './categories/categories.component';
import { ArticulosComponent } from './articulos/articulos.component';
import { DetailProductComponent } from './detail-product/detail-product.component';

@NgModule({
  declarations: [
    NavbarComponent,
    CategoriesComponent,
    ArticulosComponent,
    DetailProductComponent,
  ],
  imports: [CommonModule],
  exports: [
    NavbarComponent,
    CategoriesComponent,
    ArticulosComponent,
    DetailProductComponent,
  ],
})
export class ElementsModule {}
