import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeneralReportsComponent } from './general-reports.component';



@NgModule({
  declarations: [GeneralReportsComponent],
  imports: [
    CommonModule
  ],
  exports: [GeneralReportsComponent]
})
export class GeneralReportsModule { }
