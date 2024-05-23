import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentWorkShiftsComponent } from './department-work-shifts.component';

const routes: Routes = [{ path: '', component: DepartmentWorkShiftsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DepartmentWorkShiftsRoutingModule { }
