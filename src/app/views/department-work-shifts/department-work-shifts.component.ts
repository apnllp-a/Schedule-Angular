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
  daysInMonth: string[] = [];
  selectedOptions: { [key: string]: string } = {};
  currentMonthName: string = '';
  currentYear: number = 0;

  thaiMonthNames: string[] = [
    'มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', 'พฤษภาคม', 'มิถุนายน',
    'กรกฎาคม', 'สิงหาคม', 'กันยายน', 'ตุลาคม', 'พฤศจิกายน', 'ธันวาคม'
  ];

  constructor() { }

  ngOnInit(): void {
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
}
