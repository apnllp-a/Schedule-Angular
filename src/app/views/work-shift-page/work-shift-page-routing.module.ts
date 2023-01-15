import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkShiftPageComponent } from './work-shift-page.component';

const routes: Routes = [{ path: '', component: WorkShiftPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkShiftPageRoutingModule { }
