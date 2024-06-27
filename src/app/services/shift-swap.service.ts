import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ShiftSwap } from '../models/shift-swap/shift-swap.model'; // Create this model based on your API

@Injectable({
  providedIn: 'root'
})
export class ShiftSwapService {
  private apiUrl = 'http://localhost:8080/shiftswaps'; // Your API URL

  constructor(private http: HttpClient) { }

  // Create a new shift swap request
  createShiftSwap(shiftSwap: any): Observable<ShiftSwap> {
    return this.http.post<ShiftSwap>(`${this.apiUrl}`, shiftSwap, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    });
  }

  // Get all shift swap requests
  getShiftSwaps(): Observable<ShiftSwap[]> {
    return this.http.get<ShiftSwap[]>(`${this.apiUrl}`);
  }

  // Get a single shift swap request by ID
  getShiftSwap(id: string): Observable<ShiftSwap> {
    return this.http.get<ShiftSwap>(`${this.apiUrl}/${id}`);
  }

  // Update a shift swap request by ID (approval status)
  approveShiftSwap(id: string, userId: string, status: string): Observable<ShiftSwap> {
    return this.http.patch<ShiftSwap>(`${this.apiUrl}/${id}/approve`, { userId, status }, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    });
  }

  // Delete a shift swap request by ID
  deleteShiftSwap(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
