import {ActivatedRouteSnapshot, Resolve, Router} from '@angular/router';
import {Injectable} from '@angular/core';
import {ToastrService} from 'ngx-toastr';
import {Observable, of} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {DoctorService} from '../../service/doctor.service';
import {Doctor} from '../../models/doctor';

@Injectable()

export class DoctorResolver implements Resolve<Doctor[]>{
  pageNumber=1;
  pageSize=3;

  constructor(private doctorService:DoctorService
    ,private router:Router
    ,private toastrService:ToastrService) {
  }

  resolve(route:ActivatedRouteSnapshot):Observable<Doctor[]>{
    return this.doctorService.getAllPaginatedDoctors(this.pageNumber,this.pageSize)
      .pipe(
        catchError(err => {
          this.toastrService.error('data is not loaded');
          return of(null);
        })
      )
  }
}
