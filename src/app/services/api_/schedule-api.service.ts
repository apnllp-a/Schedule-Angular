import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface ScheduleEntry {
  date: string;
  shift: string;
}

interface Schedule {
  username: string;
  department: string;
  schedule: ScheduleEntry[];
}

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
export class ScheduleService {
  private apiUrl = 'http://localhost:8080/schedules'; // Update with your backend URL

  constructor(private http: HttpClient) {}

  createSchedule(schedule: Schedule): Observable<Schedule> {
    return this.http.post<Schedule>(this.apiUrl, schedule);
  }

  getSchedules(): Observable<Schedule[]> {
    return this.http.get<Schedule[]>(this.apiUrl);
  }

  getUser(username: string): Observable<User> { // Add this method
    return this.http.get<User>(`${this.apiUrl}/${username}`);
  }
}
