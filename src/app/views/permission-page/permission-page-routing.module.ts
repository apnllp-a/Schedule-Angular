import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PermissionPageComponent } from './permission-page.component';

const routes: Routes = [ {  path:'',
component:PermissionPageComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PermissionPageRoutingModule { }
