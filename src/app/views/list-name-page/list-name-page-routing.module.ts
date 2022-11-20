import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListNamePageComponent } from './list-name-page.component';

const routes: Routes = [
  {  path:'',
  component:ListNamePageComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListNamePageRoutingModule { }
