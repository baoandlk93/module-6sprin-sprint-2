import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarRoutingModule } from './car-routing.module';
import { AddNewCarComponent } from './add-new-car/add-new-car.component';
import { EditCarComponent } from './edit-car/edit-car.component';
import { CarListComponent } from './car-list/car-list.component';
import {ToolbarModule} from "primeng/toolbar";
import {ToastModule} from "primeng/toast";
import {ButtonModule} from "primeng/button";
import {FileUploadModule} from "primeng/fileupload";
import {TableModule} from "primeng/table";
import {RatingModule} from "primeng/rating";
import {FormsModule} from "@angular/forms";
import {DialogModule} from "primeng/dialog";
import {DropdownModule} from "primeng/dropdown";
import {RadioButtonModule} from "primeng/radiobutton";
import {InputNumberModule} from "primeng/inputnumber";
import {ConfirmDialogModule} from "primeng/confirmdialog";


@NgModule({
  declarations: [
    AddNewCarComponent,
    EditCarComponent,
    CarListComponent
  ],
  imports: [
    CommonModule,
    CarRoutingModule,
    ToolbarModule,
    ToastModule,
    ButtonModule,
    FileUploadModule,
    TableModule,
    RatingModule,
    FormsModule,
    DialogModule,
    DropdownModule,
    RadioButtonModule,
    InputNumberModule,
    ConfirmDialogModule
  ]
})
export class CarModule { }
