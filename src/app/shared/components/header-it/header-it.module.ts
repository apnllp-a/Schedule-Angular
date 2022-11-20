import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderItComponent } from './header-it.component';



@NgModule({
  declarations: [HeaderItComponent],
  imports: [
    CommonModule
  ],exports:[HeaderItComponent]
})
export class HeaderItModule { }
