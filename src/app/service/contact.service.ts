import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {Contact} from '../models/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http:HttpClient) { }

  getAllContacts():Observable<Contact[]>{
    return this.http.get<Contact[]>(environment.baseUrl+'contact')
  }

  getContactById(id:number):Observable<Contact>{
    return this.http.get<Contact>(environment.baseUrl+"contact/"+id)
  }

  createContact(contact:FormData){
    return this.http.post(environment.baseUrl + 'contact',contact);
  }

  deleteContact(id:number){
    return this.http.delete(environment.baseUrl + 'contact/' + id);
  }
}
