import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserAll } from '../../models/user/user-all.model';
const baseUrl = 'http://localhost:8080/api/userAll';
@Injectable({
  providedIn: 'root'
})
export class UserAllService {

  constructor(private http:HttpClient) { }

  getAll(): Observable<UserAll[]> {
    return this.http.get<UserAll[]>(baseUrl);
  }

  get(id: any): Observable<UserAll> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  findByName(name: any): Observable<UserAll[]> {
    return this.http.get<UserAll[]>(`${baseUrl}?firstname=${name}`);
  }
}
