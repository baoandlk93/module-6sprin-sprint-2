import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart/cart.component';
import {DividerModule} from "primeng/divider";
import {CartRoutingModule} from "./cart-routing.module";
import {ButtonModule} from "primeng/button";
import {PaginatorModule} from "primeng/paginator";




@NgModule({
  declarations: [
    CartComponent
  ],
    imports: [
        CommonModule,
        CartRoutingModule,
        DividerModule,
        ButtonModule,
        PaginatorModule
    ]
})
export class CartModule { }
