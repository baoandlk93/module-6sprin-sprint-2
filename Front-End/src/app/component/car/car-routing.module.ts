import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AddNewCarComponent} from "./add-new-car/add-new-car.component";
import {EditCarComponent} from "./edit-car/edit-car.component";
import {CarListComponent} from "./car-list/car-list.component";

const routes: Routes = [
  {
    path: 'create', component: AddNewCarComponent
  },
  {
    path: 'edit/{id}', component: EditCarComponent
  },
  {
    path: 'list', component: CarListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarRoutingModule { }
