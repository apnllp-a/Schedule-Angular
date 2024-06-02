import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepartmentWorkShiftsRoutingModule } from './department-work-shifts-routing.module';
import { DepartmentWorkShiftsComponent } from './department-work-shifts.component';
import { HeaderHdModule } from 'src/app/shared/components/header-hd/header-hd.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DepartmentWorkShiftsComponent
  ],
  imports: [
    CommonModule,
    DepartmentWorkShiftsRoutingModule,
    HeaderHdModule,
    FormsModule
  ]
})
export class DepartmentWorkShiftsModule { }
