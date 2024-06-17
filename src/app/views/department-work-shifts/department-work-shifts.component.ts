import { Component, OnInit } from '@angular/core';
import { ScheduleService } from 'src/app/services/api_/schedule-api.service';
import { UsersService } from "src/app/services/api_/users.service";
import { ApiService } from '../../services/api_/api.service';
import { User } from 'src/app/services/api_/schedule-api.service'; 

interface Day {
  date: Date;
  color: string;
  day: number;
  month: number;
  year: number;
  name?: string;
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
  selector: 'app-department-work-shifts',
  templateUrl: './department-work-shifts.component.html',
  styleUrls: ['./department-work-shifts.component.scss']
})
export class DepartmentWorkShiftsComponent implements OnInit {
  daysInMonth: string[] = [];
  schedules: any[] = [];
  // selectedOptions: { [key: string]: string } = {};
  selectedOptions: { [date: string]: string } = {};
  currentMonthName: string = '';
  currentYear: number = 0;

  detailSchedule: any[] = [];
  detailScheduleTest: any[] = [];
  users: any[] = [];
  typeOfShift: any[] = [];

  selectedUser: any;

  toggel= false;

  thaiMonthNames: string[] = [
    'มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', 'พฤษภาคม', 'มิถุนายน',
    'กรกฎาคม', 'สิงหาคม', 'กันยายน', 'ตุลาคม', 'พฤศจิกายน', 'ธันวาคม'
  ];

  constructor(private apiService: ApiService,private UsersService: UsersService, private ScheduleService: ScheduleService,) {
  this.selectedOptions = {};

   }

  ngOnInit(): void {
    this.fetchSchedules();
    this.retrieveUsers();
    this.retrieveTypeOfShifts();
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth(); // Months are 0-based in JavaScript
    this.currentMonthName = this.thaiMonthNames[currentMonth];
    this.currentYear = currentYear + 543; // Convert Gregorian year to Buddhist year

    const numDaysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    this.daysInMonth = Array.from({ length: numDaysInMonth }, (_, i) => {
      const day = i + 1;
      const date = new Date(currentYear, currentMonth, day);
      return this.formatDate(date);
    });
    
  }

  
  retrieveUsers(): void {
    this.UsersService.getAll().subscribe(
      data => {
        this.users = data;
        console.log(data);
      },
      error => {
        console.error(error);
      });
  }

 

  formatDate(date: Date): string {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-based
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }

  isWeekend(dateString: string): boolean {
    const [day, month, year] = dateString.split('/').map(Number);
    const date = new Date(year, month - 1, day);
    const dayOfWeek = date.getDay();
    return dayOfWeek === 0 || dayOfWeek === 6; // 0 = Sunday, 6 = Saturday
  }

  onSelectOption(date: string, option: string): void {
    this.selectedOptions[date] = option;

    console.log(this.selectedOptions)

  }

  onSubmit(): void {
    const schedule: Schedule = {
      username: this.selectedUser.username,
      department: this.selectedUser.department,
      schedule: Object.keys(this.selectedOptions).map(date => ({
        date: date,
        shift: this.selectedOptions[date]
      }))
    };

    this.ScheduleService.createSchedule(schedule)
      .subscribe(
        response => console.log('Data created successfully:', response),
        error => console.error('Error creating data:', error)
      );

      this.toggel = false;
      location.reload();
  }

  onSelectOption2(username: string, department: string, date: string, shift: string): void {
    this.selectedOptions[date] = shift;
    console.log(`Selected option for ${date}: ${shift}`);

    const schedule: Schedule = {
      username: username,
      department: department,
      schedule: Object.keys(this.selectedOptions).map(date => ({
        date: date,
        shift: this.selectedOptions[date]
      }))
    };

    this.ScheduleService.createSchedule(schedule)
      .subscribe(
        response => console.log('Data created successfully:', response),
        error => console.error('Error creating data:', error)
      );
  }

  retrieveTypeOfShifts(): void {
    this.apiService.getTypeOfShifts().subscribe(
      data => {
        this.typeOfShift = data;
        console.log(data);
      },
      error => {
        console.error(error);
      });
  }


  t: string;
  ts: string;
  td: string;
  n: number;
  id:string;
  selectUser(id: any): void {
    this.UsersService.get(id).subscribe(
      data => {
        this.selectedUser = data;
        console.log(this.selectedUser);

        this.toggel = true;
      },
      error => {
        console.error(error);
      });
  }

  saveData():void{
   const detailSchedule = {

   }
  }

  userss: { [username: string]: User } = {}; 

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
        this.userss[username] = user;
        console.log(this.userss[username])
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

  // Assume this is part of your component class
public isUserScheduled(username: string): boolean {
  return this.schedules.some(item => item.username === username);
}

}
