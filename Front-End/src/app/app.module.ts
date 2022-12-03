import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeModule} from "./component/home/home.module";
import {CarModule} from "./component/car/car.module";
import {BlogModule} from "./component/blog/blog.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {StyleClassModule} from 'primeng/styleclass';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HomeModule,
    CarModule,
    BlogModule,
    StyleClassModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
