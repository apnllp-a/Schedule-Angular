import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SetConditionsPageComponent } from './set-conditions-page.component';

const routes: Routes = [{ path: '', component: SetConditionsPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SetConditionsPageRoutingModule { }
