import { Component, OnInit } from '@angular/core';

interface Day {
  date: Date;
  color: string;
  day: number;
  month: number;
  year: number;
  name?: string;
}

@Component({
  selector: 'app-department-work-shifts',
  templateUrl: './department-work-shifts.component.html',
  styleUrls: ['./department-work-shifts.component.scss']
})
export class DepartmentWorkShiftsComponent implements OnInit {

  constructor() { }

  weekDays: string[] = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  calendarDays: (Day | null)[][] = [];
  headerDays: number[] = [];
  headerDaystest: number[] = [10,1,11,12];
  holidays: Date[] = [
    new Date(2024, 0, 1), // Example holiday: January 1, 2024
    new Date(2024, 11, 25) // Example holiday: December 25, 2024
  ];
  selectedDay: Day | null = null;

  ngOnInit(): void {
    this.generateCalendar(new Date().getFullYear(), new Date().getMonth());
  }

  generateCalendar(year: number, month: number): void {
    const firstDayOfMonth = new Date(year, month, 1);
    const lastDayOfMonth = new Date(year, month + 1, 0);
    const firstDayOfWeek = firstDayOfMonth.getDay();
    const daysInMonth: (Day | null)[] = [];

    // Generate header numbers
    this.headerDays = Array.from({ length: lastDayOfMonth.getDate() }, (_, i) => i + 1);

    // Add null values for the days before the first day of the month
    for (let i = 0; i < firstDayOfWeek; i++) {
      daysInMonth.push(null);
    }

    // Add actual days of the month
    for (let day = 1; day <= lastDayOfMonth.getDate(); day++) {
      const date = new Date(year, month, day);
      let color = '';

      if (date.getDay() === 0) { // Sunday
        color = 'red';
      } else if (date.getDay() === 6) { // Saturday
        color = 'blue';
      } else if (this.isHoliday(date)) { // Holiday
        color = 'green';
      }

      daysInMonth.push({ 
        date, 
        color, 
        day: date.getDate(), 
        month: date.getMonth() + 1, // Months are zero-based in JavaScript Date
        year: date.getFullYear() 
      });
    }

    // Group the days into weeks
    this.calendarDays = [];
    while (daysInMonth.length) {
      this.calendarDays.push(daysInMonth.splice(0, 7));
    }
  }

  isHoliday(date: Date): boolean {
    return this.holidays.some(holiday => 
      holiday.getDate() === date.getDate() &&
      holiday.getMonth() === date.getMonth() &&
      holiday.getFullYear() === date.getFullYear()
    );
  }

  selectDay(day: Day | null): void {
    if (day) {
      this.selectedDay = day;
    }
  }

  saveName(name: string): void {
    if (this.selectedDay) {
      this.selectedDay.name = name;
      this.selectedDay = null;
    }
  }
}
