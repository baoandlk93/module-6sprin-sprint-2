import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AddNewCarComponent} from "./add-new-car/add-new-car.component";
import {EditCarComponent} from "./edit-car/edit-car.component";
import {CarListComponent} from "./car-list/car-list.component";
import {CarDetailComponent} from "./car-detail/car-detail.component";
import {AuthGuard} from "../../service/auth.guard";

const routes: Routes = [
  {
    path: 'create',
    component: AddNewCarComponent
  },
  {
    path: 'edit/{id}', component: EditCarComponent
  },
  {
    path: 'list',canActivate: [AuthGuard],
    data: {
      roles: ['ROLE_ADMIN']
    }, component: CarListComponent
  },
  {
    path: 'detail/:id', component: CarDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarRoutingModule { }
