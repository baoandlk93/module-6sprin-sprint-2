import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart/cart.component';
import {DividerModule} from "primeng/divider";
import {CartRoutingModule} from "./cart-routing.module";




@NgModule({
  declarations: [
    CartComponent
  ],
    imports: [
        CommonModule,
        CartRoutingModule,
        DividerModule
    ]
})
export class CartModule { }
