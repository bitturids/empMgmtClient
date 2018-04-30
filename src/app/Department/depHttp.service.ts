import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { DepartmentDetail } from './department.model';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  @Injectable()
export class DepartmentHttpService {

    constructor(private http: HttpClient){

    }

    getDepartments() : Observable<DepartmentDetail[]>{
           return this.http.get<DepartmentDetail[]>("http://localhost:57533/api/department")
           .pipe(tap(list=>{
                console.log(list); 
            }));
    }


}