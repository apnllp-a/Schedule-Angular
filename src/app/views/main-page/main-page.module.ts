import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainPageRoutingModule } from './main-page-routing.module';
import { HeaderModule } from 'src/app/shared/components/header/header.module';
import { MainPageComponent } from './main-page.component';
import { CalendarTableModule } from 'src/app/shared/components/calendar-table/calendar-table.module';


@NgModule({
  declarations: [MainPageComponent],
  imports: [
    CommonModule,
    MainPageRoutingModule,
    HeaderModule,
    CalendarTableModule
  ]
})
export class MainPageModule { }
