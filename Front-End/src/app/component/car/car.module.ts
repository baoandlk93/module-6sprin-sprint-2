import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarRoutingModule } from './car-routing.module';
import { AddNewCarComponent } from './add-new-car/add-new-car.component';
import { EditCarComponent } from './edit-car/edit-car.component';
import { CarListComponent } from './car-list/car-list.component';
import { CarDetailComponent } from './car-detail/car-detail.component';
import {InputTextModule} from "primeng/inputtext";
import {DropdownModule} from "primeng/dropdown";
import {InputTextareaModule} from "primeng/inputtextarea";
import {FileUploadModule} from "primeng/fileupload";
import {CheckboxModule} from "primeng/checkbox";
import {RippleModule} from "primeng/ripple";
import {TableModule} from "primeng/table";
import {ToolbarModule} from "primeng/toolbar";
import {DataViewModule} from "primeng/dataview";
import {FormsModule} from "@angular/forms";
import {RatingModule} from "primeng/rating";
import {InputNumberModule} from "primeng/inputnumber";
import {ConfirmDialogModule} from "primeng/confirmdialog";
import {RadioButtonModule} from "primeng/radiobutton";
import {DialogModule} from "primeng/dialog";
import {ToastModule} from "primeng/toast";
import {GalleriaModule} from "primeng/galleria";


@NgModule({
  declarations: [
    AddNewCarComponent,
    EditCarComponent,
    CarListComponent,
    CarDetailComponent
  ],
    imports: [
        CommonModule,
        CarRoutingModule,
        InputTextModule,
        DropdownModule,
        InputTextareaModule,
        FileUploadModule,
        CheckboxModule,
        RippleModule,
        TableModule,
        ToolbarModule,
        DataViewModule,
        FormsModule,
        RatingModule,
        InputNumberModule,
        ConfirmDialogModule,
        RadioButtonModule,
        DialogModule,
        ToastModule,
        GalleriaModule
    ]
})
export class CarModule { }
