import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResultSchedulePageRoutingModule } from './result-schedule-page-routing.module';
import { ResultSchedulePageComponent } from './result-schedule-page.component';
import { HeaderModule } from 'src/app/shared/components/header-hr/header.module';


@NgModule({
  declarations: [
    ResultSchedulePageComponent
  ],
  imports: [
    CommonModule,
    ResultSchedulePageRoutingModule,
    HeaderModule,
  ]
})
export class ResultSchedulePageModule { }
