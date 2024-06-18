import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
export interface User {
  username: string;
  firstName: string;
  lastName: string;
  password?: string;  // Optional because you might not want to send the password to the frontend
  email?: string;
  department: string;
  role: 'IT' | 'HR' | 'Board' | 'Head' | 'Employee';
  status: 'active' | 'pending' | 'disabled' | 'inactive';
  createdAt: Date;
  updatedAt: Date;
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private baseUrl: string = 'http://localhost:8080/users';

  constructor(private http: HttpClient) { }

  create(data: any): Observable<any> {
    return this.http.post(this.baseUrl, data);
  }

  getAll(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl);
  }

  get(id: any): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(this.baseUrl);
  }

  findAllPublished(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/published`);
  }

  findByFirstName(firstname: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}?firstname=${firstname}`);
  }

  getUser(username: string | null): Observable<User> { // Add this method
    return this.http.get<User>(`${this.baseUrl}/user/${username}`);
  }

  updateStatus(userId: string, newStatus: 'active' | 'pending' | 'disabled' | 'inactive'): Observable<any> {
    const updateUrl = `${this.baseUrl}/update/${userId}`;
    return this.http.patch(updateUrl, { status: newStatus });
  }

  getPendingUsers(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/pending`);
  }

  getActiveUsers(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/active`);
  }
}
