import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './elements/navbar/navbar.component';
import { CategoriesComponent } from './elements/categories/categories.component';

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
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
