import { Component ,OnInit} from "@angular/core";
import { DepartmentDetail } from '../department.model';
import { DepService } from "../dep.service"

@Component({
selector:'app-list-department',
templateUrl:'./list-department.component.html'

})

export class ListDepartmentComponent implements OnInit{

    constructor(private departmentService : DepService){


    }

ngOnInit(){
//let ff = this.departmentService.getDepartments();
//alert(ff);
}

}