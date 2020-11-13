import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor(private http:HttpClient) { }



  createFile(file:File):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders()
    }
    const formdata:FormData=new FormData();
    formdata.append('lorem',file,file.name)
    return this.http.post(environment.baseUrl+'fileupload',formdata,httpOptions)
  }

}
