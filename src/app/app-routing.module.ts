import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./views/login-page/login-page.module').then(m => m.LoginPageModule),
  },
  {
    path: 'register-page',
    loadChildren: () => import('./views/register-page/register-page.module').then(m => m.RegisterPageModule),
  },
  {
    path: 'main-page',
    loadChildren: () => import('./views/main-page/main-page.module').then(m => m.MainPageModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
