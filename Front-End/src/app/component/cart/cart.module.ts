import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CartComponent} from './cart/cart.component';
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
import {CustomPipeBoolean} from "../util/CustomPipeBoolean";
import {ToastModule} from "primeng/toast";
import {DialogModule} from "primeng/dialog";
import { ContractListComponent } from '../contract/contract-list/contract-list.component';

@NgModule({
    declarations: [
        CartComponent,
        CustomPipeBoolean,
        ContractListComponent
    ],
    exports: [
        CustomPipeBoolean
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
        RatingModule,
        ToastModule,
        DialogModule
    ]
})
export class CartModule {
}
