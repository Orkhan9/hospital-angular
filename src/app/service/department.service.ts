import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {Department} from '../models/department';
import {Doctor} from '../models/doctor';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor(private http:HttpClient) { }

  getAllDepartments():Observable<Department[]>{
    return  this.http.get<Department[]>(environment.baseUrl+'department')
  }

  getDepartmentbyId(id){
    return  this.http.get<Department>(environment.baseUrl+'department/'+id)
  }

  createDepartment(department:Department){
    return this.http.post(environment.baseUrl + 'department',department);
  }

  editDepartment(department:Doctor){
    return this.http.put(environment.baseUrl + 'department/' + department.id,department);

  }

  deleteDepartment(id:number){
    return this.http.delete(environment.baseUrl + 'department/' + id);
  }
}
