import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ScheduleService } from 'src/app/services/api_/schedule-api.service';
import { User } from 'src/app/services/api_/schedule-api.service'; 
import { UsersService } from 'src/app/services/api_/users.service'; 
import { ApiService } from 'src/app/services/api_/api.service';

export interface Shift {
  employeeName: string;
  shifts: string[];
}


interface ScheduleEntry {
  date: string;
  shift: string;
}

interface Schedule {
  username: string;
  department: string;
  schedule: ScheduleEntry[];
}

@Component({
  selector: 'app-result-schedule-page',
  templateUrl: './result-schedule-page.component.html',
  styleUrls: ['./result-schedule-page.component.scss'],
  providers: [DatePipe]
})
export class ResultSchedulePageComponent implements OnInit {
  schedule: Schedule[] = [];
  detailsOfMonths: any[] = [];
  TimeIn: string ;
  TimeOut: string;
  constructor(private apiService: ApiService, private datePipe: DatePipe,private ScheduleService: ScheduleService,private UsersService:UsersService) {}

  ngOnInit(): void {
    this.getDetailsOfMonth();
    this.fetchSchedules();
  }


  getDetailsOfMonth() {
    this.apiService.getTypeOfShifts().subscribe(data => {
      this.detailsOfMonths = data;
      // Assuming each element in detailsOfMonths is an object with TimeIn and TimeOut properties
      this.detailsOfMonths.forEach(monthDetails => {
        const timeIn = monthDetails.TimeIn;
        const timeOut = monthDetails.TimeOut;

        this.TimeIn = timeIn;
        this.TimeOut = timeOut;
        // Now you can use timeIn and timeOut as needed
        console.log('TimeIn:', this.TimeIn, 'TimeOut:', this.TimeOut);
      });
    });
  }

  schedules: Schedule[] = [];
  users: { [username: string]: User } = {};  // Store user data


  fetchSchedules(): void {
    this.ScheduleService.getSchedules().subscribe(
      (data) => {
        this.schedules = data;
        console.log(this.schedules)
        this.schedules.forEach(schedule => {
          this.fetchUser(schedule.username);  // Fetch user info for each schedule
        });
      },
      (error) => {
        console.error('Error fetching schedules:', error);
      }
    );
  }

  fetchUser(username: string): void {
    this.UsersService.getUser(username).subscribe(
      (user) => {
        this.users[username] = user;
        console.log(this.users[username])
      },
      (error) => {
        console.error('Error fetching user:', error);
      }
    );
  }

  getShiftForDate(schedule: Schedule, day: number): string {
    const dateStr = `${day < 10 ? '0' : ''}${day}/06/2024`;
    const shift = schedule.schedule.find(s => s.date === dateStr);
    return shift ? shift.shift : '-';
  }



  getDShiftsForSchedule(schedule: any): number {
    let totalDShifts = 0;
    for (let j = 0; j < 30; j++) {
      if (this.getShiftForDate(schedule, j + 1) === 'D') {
        totalDShifts++;
      }
    }
    return totalDShifts;
  }

  getNShiftsForSchedule(schedule: any): number {
    let totalNShifts = 0;
    for (let j = 0; j < 30; j++) {
      if (this.getShiftForDate(schedule, j + 1) === 'N') {
        totalNShifts++;
      }
    }
    return totalNShifts;
  }

  getDNShiftsForSchedule(schedule: any): number {
    return this.getDShiftsForSchedule(schedule) + this.getNShiftsForSchedule(schedule);
  }

  calculateDurationForMonth(): number {
    if (!this.TimeIn || !this.TimeOut) {
        return 0; // or any appropriate default value
    }

    const timeInDate = new Date();
    const timeOutDate = new Date();
    const [inHours, inMinutes] = this.TimeIn.split(':').map(Number);
    const [outHours, outMinutes] = this.TimeOut.split(':').map(Number);

    if (isNaN(inHours) || isNaN(inMinutes) || isNaN(outHours) || isNaN(outMinutes)) {
        return 0; // or any appropriate default value
    }

    timeInDate.setHours(inHours, inMinutes || 0, 0); // Use 0 minutes if not provided
    timeOutDate.setHours(outHours, outMinutes || 0, 0); // Use 0 minutes if not provided

    const millisecondsInHour = 1000 * 60 * 60;
    const daysInMonth = new Date(timeInDate.getFullYear(), timeInDate.getMonth() + 1, 0).getDate();

    const timeDifference = timeInDate.getTime() -  timeOutDate.getTime();
    const totalDuration = (timeDifference / millisecondsInHour) * daysInMonth;

    return totalDuration;
}
}
