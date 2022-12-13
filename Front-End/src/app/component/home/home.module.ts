import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomePageComponent} from './home-page/home-page.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {HomeRoutingModule} from "./home-routing.module";
import {DividerModule} from "primeng/divider";
import {StyleClassModule} from "primeng/styleclass";
import {ButtonModule} from "primeng/button";
import {CarouselModule} from "primeng/carousel";
import {RippleModule} from "primeng/ripple";
import {InputTextModule} from "primeng/inputtext";
import {InputTextareaModule} from "primeng/inputtextarea";
import {AvatarModule} from "primeng/avatar";
import {ScrollTopModule} from "primeng/scrolltop";
import {AccordionModule} from "primeng/accordion";
import {CustomPipe} from "../util/custom-pipe";


@NgModule({
    declarations: [
        HomePageComponent,
        HeaderComponent,
        FooterComponent,
        CustomPipe
    ],
  exports: [
    HeaderComponent,
    FooterComponent
  ],
    imports: [
        CommonModule,
        HomeRoutingModule,
        DividerModule,
        StyleClassModule,
        ButtonModule,
        CarouselModule,
        RippleModule,
        InputTextModule,
        InputTextareaModule,
        AvatarModule,
        ScrollTopModule,
        AccordionModule
    ]
})
export class HomeModule {
}
