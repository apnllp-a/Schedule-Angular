import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material/table';
import { WorkShiftPageRoutingModule } from './work-shift-page-routing.module';
import { WorkShiftPageComponent } from './work-shift-page.component';
import { HeaderModule } from 'src/app/shared/components/header-hr/header.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Table, TableModule } from 'primeng/table';
import {MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [
    WorkShiftPageComponent
  ],
  imports: [
    CommonModule,
    WorkShiftPageRoutingModule,
    HeaderModule,
    MatTableModule,
    MatFormFieldModule,
    TableModule,
    MatDialogModule
  ]
})
export class WorkShiftPageModule { }
