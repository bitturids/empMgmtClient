import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule }     from './app.routing';

import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import {AdminComponent} from './admin/admin.component';
import {DepartmentComponent} from './department/department.component';

import {AddDepartmentComponent} from './department/add-department/add-department.component';
import {EditDepartmentComponent} from './department/edit-department/edit-department.component';
import {ListDepartmentComponent} from './department/list-department/list-department.component';


import { DepService } from './Department/dep.service';

@NgModule({
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  
  declarations: [
    AppComponent,
    AdminComponent,
    EmployeeComponent,
    DepartmentComponent,
    AddDepartmentComponent,
    EditDepartmentComponent,
    ListDepartmentComponent
    
  ],
  providers: [
    DepService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
