import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {Department} from '../models/department';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor(private http:HttpClient) {
    this.getAllDepartments()
  }

  getAllDepartments():Observable<Department[]>{
    return  this.http.get<Department[]>(environment.baseUrl+'department')
  }

  getDepartment(id){
    return  this.http.get<Department>(environment.baseUrl+'department/'+id)
  }
}
