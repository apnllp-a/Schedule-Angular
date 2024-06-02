import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl: string = 'http://localhost:8080/typesOfShifts';

  constructor(private http: HttpClient) {}

  getTypeOfShifts(): Observable<any> {
    return this.http.get(this.baseUrl);
  }

  addTypeOfShifts(detail: any): Observable<any> {
    return this.http.post(this.baseUrl, detail);
  }

  getTypeOfShiftsById(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  updateTypeOfShifts(id: string, detail: any): Observable<any> {
    return this.http.patch(`${this.baseUrl}/${id}`, detail);
  }

  deleteTypeOfShifts(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}

