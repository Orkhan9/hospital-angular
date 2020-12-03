import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {Doctor} from '../models/doctor';
import {PaginatedResult} from '../models/pagination';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  constructor(private http:HttpClient) { }

  getAllPaginatedDoctors(page?,itemPerPage?):Observable<PaginatedResult<Doctor[]>> {
    const paginatedResult:PaginatedResult<Doctor[]>=new PaginatedResult<Doctor[]>();
    let params=new HttpParams();
    if(page!=null && itemPerPage!=null){
      params=params.append('pageNumber',page);
      params=params.append('pageSize',itemPerPage);
    }
    return this.http.get<Doctor[]>(environment.baseUrl+"doctor",{observe:'response',params})
      .pipe(
        map(response=>{
          paginatedResult.result=response.body;
          if(response.headers.get('Pagination')!=null){
            paginatedResult.pagination=JSON.parse(response.headers.get('Pagination'));
          };
          return paginatedResult;
        })
      );
  }

  getAllDoctors():Observable<Doctor[]> {
    return this.http.get<Doctor[]>(environment.baseUrl+"doctor");
  }

  getDoctorbyId(id:number):Observable<Doctor>{
    return this.http.get<Doctor>(environment.baseUrl+"doctor/"+id)
  }

  getDoctorByDepartment(id:number):Observable<Doctor[]>{
    return this.http.get<Doctor[]>(environment.baseUrl+"doctor/GetDoctorByDepartment/"+id)
  }

  createDoctor(doctor:FormData){
    return this.http.post(environment.baseUrl + 'doctor',doctor);
  }

  editDoctor(id:number,doctor:FormData){
    return this.http.put(environment.baseUrl + 'doctor/' + id,doctor);

  }

  deleteDoctor(id:number){
    return this.http.delete(environment.baseUrl + 'doctor/' + id);
  }
}
