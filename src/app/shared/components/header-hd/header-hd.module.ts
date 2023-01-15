import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderHdComponent } from './header-hd.component';
import { RouterLink } from '@angular/router';



@NgModule({
  declarations: [HeaderHdComponent],
  imports: [
    CommonModule,
    RouterLink
  ],exports: [HeaderHdComponent]
})
export class HeaderHdModule { }
