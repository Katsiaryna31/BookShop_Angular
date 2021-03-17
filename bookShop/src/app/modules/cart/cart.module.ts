import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { SharedModuleModule } from '../shared-module/shared-module.module';

import { CartItemComponent } from './cart-item/cart-item.component';
import { CartComponent } from './cart/cart.component';


@NgModule({
  declarations: [
    CartItemComponent,
    CartComponent
  ],
  imports: [
    SharedModuleModule,
    BrowserModule,
  ],
  exports: [
    CartItemComponent,
    CartComponent
  ],
})
export class CartModule { }
