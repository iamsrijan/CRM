import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CustomerService } from './customer.service';
import { EmployeeService } from './employee.service';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddcustomerComponent } from './addcustomer/addcustomer.component';
import { GetcustomerComponent } from './getcustomer/getcustomer.component';
import { EditcustomerComponent } from './editcustomer/editcustomer.component';
import { NotFound4o4Component } from './not-found4o4/not-found4o4.component';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { EditemployeeComponent } from './editemployee/editemployee.component';
import { CompanyComponent } from './company/company.component';
import { GetemployeeComponent } from './getemployee/getemployee.component';

@NgModule({
  declarations: [
    AppComponent,
    AddcustomerComponent,
    GetcustomerComponent,
    EditcustomerComponent,
    NotFound4o4Component,
    AddemployeeComponent,
    EditemployeeComponent,
    CompanyComponent,
    GetemployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlimLoadingBarModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
