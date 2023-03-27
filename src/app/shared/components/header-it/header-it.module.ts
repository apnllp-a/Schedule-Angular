import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderItComponent } from './header-it.component';
import {MatSidenavModule} from '@angular/material/sidenav';


@NgModule({
  declarations: [HeaderItComponent],
  imports: [
    CommonModule,
    MatSidenavModule
    
  ],exports:[HeaderItComponent]
})
export class HeaderItModule { }
