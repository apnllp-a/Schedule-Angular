import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CalendarView } from 'angular-calendar';

@Component({
  selector: 'calendar-header',
  templateUrl: 'calendar-utills.component.html',
})
export class CalendarUtillsComponent {

  constructor() { }
  @Input() view: CalendarView | undefined;

  @Input() viewDate: Date | undefined;

  @Input() locale: string = 'en';

  @Output() viewChange = new EventEmitter<CalendarView>();

  @Output() viewDateChange = new EventEmitter<Date>();

  CalendarView = CalendarView;

}
