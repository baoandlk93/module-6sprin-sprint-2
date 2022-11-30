import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomePageComponent} from './home-page/home-page.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {HomeRoutingModule} from "./home-routing.module";
import {ConfirmDialogModule} from "primeng/confirmdialog";
import {InputNumberModule} from "primeng/inputnumber";
import {PaginatorModule} from "primeng/paginator";
import {DialogModule} from "primeng/dialog";
import {RatingModule} from "primeng/rating";
import {TableModule} from "primeng/table";
import {FileUploadModule} from "primeng/fileupload";
import {ToolbarModule} from "primeng/toolbar";
import {RadioButtonModule} from "primeng/radiobutton";
import {AutoCompleteModule} from "primeng/autocomplete";


@NgModule({
  declarations: [
    HomePageComponent,
    HeaderComponent,
    FooterComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ConfirmDialogModule,
    InputNumberModule,
    PaginatorModule,
    DialogModule,
    RatingModule,
    TableModule,
    FileUploadModule,
    ToolbarModule,
    RadioButtonModule,
    AutoCompleteModule
  ]
})
export class HomeModule {
}
