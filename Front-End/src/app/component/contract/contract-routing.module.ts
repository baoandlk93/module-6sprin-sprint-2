import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ContractListComponent} from "./contract-list/contract-list.component";
import {AuthGuard} from "../../service/auth.guard";

const routes: Routes = [
  {
    path: 'list',
    canActivate: [AuthGuard],
    data: {
      roles: ['ROLE_CUSTOMER']
    },component: ContractListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContractRoutingModule { }
