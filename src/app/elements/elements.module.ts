import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { CategoriesComponent } from './categories/categories.component';



@NgModule({
  declarations: [
    NavbarComponent,
    CategoriesComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[NavbarComponent,CategoriesComponent]
})
export class ElementsModule { }
