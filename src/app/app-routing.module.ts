import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompanyComponent } from './company/company.component';
import { AddcustomerComponent } from './addcustomer/addcustomer.component';
import { GetcustomerComponent } from './getcustomer/getcustomer.component';
import { GetemployeeComponent } from './getemployee/getemployee.component';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { EditemployeeComponent } from './editemployee/editemployee.component';

import { EditcustomerComponent } from './editcustomer/editcustomer.component';
import { NotFound4o4Component } from './not-found4o4/not-found4o4.component';

const routes: Routes = [{
  path: '',
  component: CompanyComponent
},
{
  path: 'customercreate',
  component: AddcustomerComponent
},
{
  path: 'customer/editcustomer/:id',
  component: EditcustomerComponent
},
{
  path: 'customer',
  component: GetcustomerComponent
},
{
  path: 'employee',
  component: GetemployeeComponent
},
{
  path: 'employeecreate',
  component: AddemployeeComponent
},
{
  path: 'employee/editemployee/:id',
  component: EditemployeeComponent
},
{
  path: '404',
  component: NotFound4o4Component
},
{
  path: '**',
  redirectTo: '404'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
