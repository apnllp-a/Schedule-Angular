import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShiftSchedulePageRoutingModule } from './shift-schedule-page-routing.module';
import { ShiftSchedulePageComponent } from './shift-schedule-page.component';
import { HeaderModule } from 'src/app/shared/components/header-hr/header.module';


@NgModule({
  declarations: [
    ShiftSchedulePageComponent
  ],
  imports: [
    CommonModule,
    ShiftSchedulePageRoutingModule,
    HeaderModule
  ]
})
export class ShiftSchedulePageModule { }
