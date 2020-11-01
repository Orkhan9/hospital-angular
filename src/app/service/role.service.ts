import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Role} from '../models/role';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  constructor(private http:HttpClient) { }
  getRoles():Observable<Role[]>{
    return this.http.get<Role[]>(environment.baseRoleUrl);
  }
}

