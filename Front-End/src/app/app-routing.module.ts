import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeModule} from "./component/home/home.module";
import {BlogModule} from "./component/blog/blog.module";
import {CarModule} from "./component/car/car.module";

const routes: Routes = [
  {
    path: '', loadChildren: () => HomeModule
  },
  {
    path: 'blog', loadChildren: () => BlogModule
  },
  {
    path: 'car', loadChildren: () => CarModule
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
