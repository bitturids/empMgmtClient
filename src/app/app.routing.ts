import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EmployeeComponent }   from './employee/employee.component';
import { AdminComponent }   from './admin/admin.component';
import { AppComponent } from './app.component';
import { DepartmentComponent }      from './department/department.component';
import { AddDepartmentComponent }      from './department/add-department/add-department.component';
import { EditDepartmentComponent }      from './department/edit-department/edit-department.component';
import { ListDepartmentComponent }      from './department/list-department/list-department.component';

const routes: Routes = [
    { path: '', component: AdminComponent },
    { path: 'employee', component: EmployeeComponent },
    {path: 'department', component: DepartmentComponent, 
        children: [
            { path: '', redirectTo: 'list-department',pathMatch: 'full' },
            { path: 'list-department', component: ListDepartmentComponent },
            { path: 'add-department', component: AddDepartmentComponent },
           { path: 'edit-department/:id', component: EditDepartmentComponent}
      ] }  ];

//,{ path: 'department', component: HeroesComponent }
@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
  })

export class AppRoutingModule {}