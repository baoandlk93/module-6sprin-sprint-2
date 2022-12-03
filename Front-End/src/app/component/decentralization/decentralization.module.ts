import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DecentralizationRoutingModule } from './decentralization-routing.module';
import { LoginComponent } from './login/login.component';
import {PasswordModule} from "primeng/password";
import {DividerModule} from "primeng/divider";
import {FormsModule} from "@angular/forms";
import {ButtonModule} from "primeng/button";
import {CheckboxModule} from "primeng/checkbox";
import {StyleClassModule} from "primeng/styleclass";
import { RegisterComponent } from './register/register.component';
import {InputTextModule} from "primeng/inputtext";
import {RippleModule} from "primeng/ripple";
import {CalendarModule} from "primeng/calendar";



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
    imports: [
        CommonModule,
        DecentralizationRoutingModule,
        PasswordModule,
        DividerModule,
        FormsModule,
        ButtonModule,
        CheckboxModule,
        StyleClassModule,
        InputTextModule,
        RippleModule,
        CalendarModule
    ]
})
export class DecentralizationModule { }
