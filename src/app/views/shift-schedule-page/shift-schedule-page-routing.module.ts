import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShiftSchedulePageComponent } from './shift-schedule-page.component';

const routes: Routes = [{ path: '', component: ShiftSchedulePageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShiftSchedulePageRoutingModule { }
