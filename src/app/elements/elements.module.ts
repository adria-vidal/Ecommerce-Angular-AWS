import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { CategoriesComponent } from './categories/categories.component';
import { ArticulosComponent } from './articulos/articulos.component';
import { DetailProductComponent } from './detail-product/detail-product.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    NavbarComponent,
    CategoriesComponent,
    ArticulosComponent,
    DetailProductComponent,
    FooterComponent,
    AboutComponent,
  ],
  imports: [CommonModule],
  exports: [
    NavbarComponent,
    CategoriesComponent,
    ArticulosComponent,
    DetailProductComponent,
    FooterComponent,
    AboutComponent,
  ],
})
export class ElementsModule {}
