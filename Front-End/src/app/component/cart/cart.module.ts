import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart/cart.component';
import {DividerModule} from "primeng/divider";
import {CartRoutingModule} from "./cart-routing.module";
import {ButtonModule} from "primeng/button";
import {PaginatorModule} from "primeng/paginator";
import {InputTextModule} from "primeng/inputtext";
import {MultiSelectModule} from "primeng/multiselect";
import {RippleModule} from "primeng/ripple";
import {InputSwitchModule} from "primeng/inputswitch";
import {SliderModule} from "primeng/slider";
import {DataViewModule} from "primeng/dataview";
import {RatingModule} from "primeng/rating";




@NgModule({
  declarations: [
    CartComponent
  ],
    imports: [
        CommonModule,
        CartRoutingModule,
        DividerModule,
        ButtonModule,
        PaginatorModule,
        InputTextModule,
        MultiSelectModule,
        RippleModule,
        InputSwitchModule,
        SliderModule,
        DataViewModule,
        RatingModule
    ]
})
export class CartModule { }
