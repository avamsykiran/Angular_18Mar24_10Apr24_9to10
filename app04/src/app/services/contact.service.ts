import { Injectable } from '@angular/core';
import { Contact } from '../models/contact';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private apiUrl:string;
  constructor( private httpClient:HttpClient) {
    this.apiUrl="http://localhost:8888/contacts";
  }

  getAll() : Observable<Contact[]>{
    return this.httpClient.get<Contact[]>(this.apiUrl);
  }

  getById(id:number): Observable<Contact>{
    return this.httpClient.get<Contact>(this.apiUrl + "/" + id);
  }

  add(c:Contact) : Observable<Contact>{
    return this.httpClient.post<Contact>(this.apiUrl,c);
  }

  update(c:Contact): Observable<Contact>{
    return this.httpClient.put<Contact>(this.apiUrl + "/" + c.id,c);
  }

  deleteById(id:number): Observable<void>{
    return this.httpClient.delete<void>(this.apiUrl + "/" + id);
  }
}
