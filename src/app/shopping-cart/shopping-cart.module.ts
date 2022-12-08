import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavShopComponent } from './nav-shop/nav-shop.component';
import { CartComponent } from './cart/cart.component';



@NgModule({
  declarations: [
    NavShopComponent,
    CartComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[NavShopComponent,CartComponent]
})
export class ShoppingCartModule { }
