import { CalendarUtillsComponent } from './calendar-utills.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CalendarModule } from 'angular-calendar';


@NgModule({
  imports: [CommonModule, FormsModule, CalendarModule],
  declarations: [CalendarUtillsComponent],
  exports: [CalendarUtillsComponent],
})
export class CalendarUtillsModule { }
