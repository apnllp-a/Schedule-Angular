import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditSchedulePageRoutingModule } from './edit-schedule-page-routing.module';
import { EditSchedulePageComponent } from './edit-schedule-page.component';
import { HeaderModule } from 'src/app/shared/components/header-hr/header.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    EditSchedulePageComponent
  ],
  imports: [
    CommonModule,
    EditSchedulePageRoutingModule,
    HeaderModule,
    FormsModule
   
  ]
})
export class EditSchedulePageModule { }
