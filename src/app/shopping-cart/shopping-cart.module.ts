import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavShopComponent } from './nav-shop/nav-shop.component';



@NgModule({
  declarations: [
    NavShopComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[NavShopComponent]
})
export class ShoppingCartModule { }
