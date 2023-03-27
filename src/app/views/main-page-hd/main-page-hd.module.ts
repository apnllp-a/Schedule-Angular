import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainPageHdRoutingModule } from './main-page-hd-routing.module';
import { MainPageHdComponent } from './main-page-hd.component';
import { HeaderHdModule } from 'src/app/shared/components/header-hd/header-hd.module';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { CalendarModule } from 'angular-calendar';
import { AccordionModule } from 'primeng/accordion';
import { ButtonModule } from 'primeng/button';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { ContextMenuModule } from 'primeng/contextmenu';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { MultiSelectModule } from 'primeng/multiselect';
import { ProgressBarModule } from 'primeng/progressbar';
import { SliderModule } from 'primeng/slider';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { HeaderModule } from 'src/app/shared/components/header-hr/header.module';


@NgModule({
  declarations: [
    MainPageHdComponent
  ],
  imports: [
    CommonModule,
    MainPageHdRoutingModule,
    HeaderHdModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    AccordionModule,
    TableModule,
    CalendarModule,
    SliderModule,
    MultiSelectModule,
    ContextMenuModule,
    ButtonModule,
    ToastModule,
    InputTextModule,
    ProgressBarModule,
    DropdownModule,
    HeaderModule,
    MatDialogModule,
    FormsModule,
  ]
})
export class MainPageHdModule { }
