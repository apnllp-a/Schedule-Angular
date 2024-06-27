// leave.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

export interface Leave {
  userId: string;
  leaveType: string;
  startDate: Date;
  endDate: Date;
  reason: string;
  status: 'pending' | 'approved' | 'rejected';
  approver: string;
  createdAt: Date;
  updatedAt: Date;
  medicalCertificate?: string;
  attachments?: string[];
  department: string;
}

@Injectable({
  providedIn: 'root'
})
export class DocumentService {

  private apiUrl = 'http://localhost:8080/leaves'; // Adjust the URL to match your Express.js server

  constructor(private http: HttpClient) { }

  getAllLeaves(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  getLeaveById(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  createLeave(leaveData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, leaveData)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // Client-side error
      console.error('An error occurred:', error.error.message);
    } else {
      // Server-side error
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${JSON.stringify(error.error)}`
      );
    }
    // Return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  }

  updateLeave(id: string, leaveData: any): Observable<any> {
    return this.http.patch<any>(`${this.apiUrl}/${id}`, leaveData);
  }

  deleteLeave(id: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }

  
}
