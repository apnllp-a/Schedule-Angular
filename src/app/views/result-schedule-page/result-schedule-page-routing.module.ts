import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResultSchedulePageComponent } from './result-schedule-page.component';

const routes: Routes = [{ path: '', component: ResultSchedulePageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResultSchedulePageRoutingModule { }
