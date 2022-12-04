import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { CategoriesComponent } from './categories/categories.component';
import { ArticulosComponent } from './articulos/articulos.component';
import { DetailProductComponent } from './detail-product/detail-product.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    NavbarComponent,
    CategoriesComponent,
    ArticulosComponent,
    DetailProductComponent,
    FooterComponent,
    AboutComponent,
    ContactComponent,
    RegisterComponent,
  ],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [
    NavbarComponent,
    CategoriesComponent,
    ArticulosComponent,
    DetailProductComponent,
    FooterComponent,
    AboutComponent,
    ContactComponent,
    RegisterComponent,
    FormsModule,
  ],
})
export class ElementsModule {}
