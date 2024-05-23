import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditSchedulePageComponent } from './edit-schedule-page.component';

const routes: Routes = [{ path: '', component: EditSchedulePageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditSchedulePageRoutingModule { }
