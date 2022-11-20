import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PermissionsComponent } from './permissions.component';



@NgModule({
  declarations: [PermissionsComponent],
  imports: [
    CommonModule
  ],exports: [PermissionsComponent]
})
export class PermissionsModule { }
