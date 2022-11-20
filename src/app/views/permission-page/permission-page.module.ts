import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PermissionPageRoutingModule } from './permission-page-routing.module';
import { PermissionPageComponent } from './permission-page.component';
import { HeaderItModule } from 'src/app/shared/components/header-it/header-it.module';
import { PermissionsModule } from 'src/app/shared/components/permissions/permissions.module';


@NgModule({
  declarations: [PermissionPageComponent],
  imports: [
    CommonModule,
    PermissionPageRoutingModule,
    HeaderItModule,
    PermissionsModule
  ],exports:[PermissionPageComponent]
})
export class PermissionPageModule { }
