import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageItComponent } from './main-page-it.component';

const routes: Routes = [
  {  path:'',
      component:MainPageItComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainPageItRoutingModule { }
