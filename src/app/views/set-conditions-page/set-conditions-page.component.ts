import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-set-conditions-page',
  templateUrl: './set-conditions-page.component.html',
  styleUrls: ['./set-conditions-page.component.scss']
})
export class SetConditionsPageComponent implements OnInit {

  constructor() { }
  test: number;
  public daysOfWeek: string[] = ['อา.', 'จ.', 'อ.', 'พ.', 'พฤ.', 'ศ.', 'ส.'];
  public calendar: number[][] = [];

  toggle_popup_form = false;

  ngOnInit() {
    this.generateCalendar();
    console.log(this.test)
  }

  generateCalendar() {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();

    const weeks: number[][] = [];
    let currentWeek: number[] = [];
    let currentDay = firstDay.getDay();

    for (let i = 0; i < currentDay; i++) {
      currentWeek.push();
    }

    for (let i = 1; i <= daysInMonth; i++) {
      currentWeek.push(i);
      currentDay++;

      if (currentDay === 7) {
        weeks.push(currentWeek);
        currentWeek = [];
        currentDay = 0;
        console.log(weeks)
        this.test = currentDay;
      }
    }

    if (currentWeek.length > 0) {
      weeks.push(currentWeek);
    }

    this.calendar = weeks;
  }

  isWeekend(day: number | string): boolean {
    if (typeof day === 'number') {
      const currentDate = new Date();
      const year = currentDate.getFullYear();
      const month = currentDate.getMonth();
      const date = new Date(year, month, day);
      const dayOfWeek = date.getDay();
      return dayOfWeek === 0 || dayOfWeek === 6; // Sunday or Saturday
    }
    return false; // Placeholder days should not have a background color
  }


}
