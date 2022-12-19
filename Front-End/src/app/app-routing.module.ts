import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeModule} from "./component/home/home.module";
import {BlogModule} from "./component/blog/blog.module";
import {CarModule} from "./component/car/car.module";
import {DecentralizationModule} from "./component/decentralization/decentralization.module";
import {CartModule} from "./component/cart/cart.module";
import {ContractModule} from "./component/contract/contract.module";

const routes: Routes = [
  {
    path: '', loadChildren: () => HomeModule
  },
  {
    path: 'blog', loadChildren: () => BlogModule
  },
  {
    path: 'car', loadChildren: () => CarModule
  },
  {
    path: 'login', loadChildren: () => DecentralizationModule
  },
  {
    path: 'cart', loadChildren: () => CartModule
  },
  {
    path:'contract',loadChildren: () => ContractModule
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
