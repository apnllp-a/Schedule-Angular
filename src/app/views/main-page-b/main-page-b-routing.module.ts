import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageBComponent } from './main-page-b.component';

const routes: Routes = [{ path: '', component: MainPageBComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainPageBRoutingModule { }
