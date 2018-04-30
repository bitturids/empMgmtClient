import { Component ,OnInit} from "@angular/core";
import { DepartmentDetail } from '../department.model';
import {DepartmentHttpService } from "../depHttp.service"

@Component({
selector:'app-list-department',
templateUrl:'./list-department.component.html'

})

export class ListDepartmentComponent implements OnInit{

    constructor(private departmentService : DepartmentHttpService){


    }

ngOnInit(){
//let ff = this.departmentService.getDepartments();
//alert(ff);
}

}