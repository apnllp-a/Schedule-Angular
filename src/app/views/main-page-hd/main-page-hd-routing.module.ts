import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageHdComponent } from './main-page-hd.component';

const routes: Routes = [{ path: '', component: MainPageHdComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainPageHdRoutingModule { }
