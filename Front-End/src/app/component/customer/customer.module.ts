import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerEditComponent } from './customer-edit/customer-edit.component';
import { CustomerCreateComponent } from './customer-create/customer-create.component';



@NgModule({
  declarations: [
    CustomerListComponent,
    CustomerEditComponent,
    CustomerCreateComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CustomerModule { }
