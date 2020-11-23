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

  // postFile(fileToUpload: File): Observable<any> {
  //   const endpoint = environment.baseUrl;
  //   const formData: FormData = new FormData();
  //   formData.append('fileKey', fileToUpload, fileToUpload.name);
  //   return this.http
  //     .post(endpoint, formData, { headers: new HttpHeaders() })
  //     .map(() => { return true; })
  //     .catch((e) => this.handleError(e));
  //}

}
