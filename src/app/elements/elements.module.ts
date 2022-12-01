import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { CategoriesComponent } from './categories/categories.component';
import { ArticulosComponent } from './articulos/articulos.component';



@NgModule({
  declarations: [
    NavbarComponent,
    CategoriesComponent,
    ArticulosComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[NavbarComponent,CategoriesComponent, ArticulosComponent]
})
export class ElementsModule { }
