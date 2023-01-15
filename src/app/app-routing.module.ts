import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfirmationTableComponent } from './shared/components/confirmation-table/confirmation-table.component';

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
    path: 'register-page/:id',
    loadChildren: () => import('./views/register-page/register-page.module').then(m => m.RegisterPageModule),
  },
  {
    path: 'add',
    loadChildren: () => import('./views/register-page/register-page.module').then(m => m.RegisterPageModule),
  },
  {
    path: 'main-page-hr',
    loadChildren: () => import('./views/main-page-hr/main-page.module').then(m => m.MainPageModule),
  },
  {
    path: 'main-page-it',
    loadChildren: () => import('./views/main-page-it/main-page-it.module').then(m => m.MainPageItModule),
  },
  {
    path: 'main-page-it/confirmation-page',
    loadChildren: () => import('./views/confirmation-page/confirmation-page.module').then(m => m.ConfirmationPageModule),
  },
  {
    path: 'main-page-it/list-name-page',
    loadChildren: () => import('./views/list-name-page/list-name-page.module').then(m => m.ListNamePageModule),
  },
  {
    path: 'account-page',
    loadChildren: () => import('./views/account-page/account-page.module').then(m => m.AccountPageModule),
  },
  {
    path: 'main-page-it/permission-page',
    loadChildren: () => import('./views/permission-page/permission-page.module').then(m => m.PermissionPageModule),
  },
  {
    path: 'checkout', component: ConfirmationTableComponent
  },
  { path: 'work-shift-page', 
  loadChildren: () => import('./views/work-shift-page/work-shift-page.module').then(m => m.WorkShiftPageModule)
 },
  { path: 'documents-page', 
  loadChildren: () => import('./views/documents-page/documents-page.module').then(m => m.DocumentsPageModule) 
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
