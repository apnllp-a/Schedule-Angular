import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocumentBPageRoutingModule } from './document-b-page-routing.module';
import { DocumentBPageComponent } from './document-b-page.component';
import { HeaderBModule } from 'src/app/shared/components/header-b/header-b.module';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { CalendarModule } from 'angular-calendar';
import { AccordionModule } from 'primeng/accordion';
import { ButtonModule } from 'primeng/button';
import { ContextMenuModule } from 'primeng/contextmenu';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { MultiSelectModule } from 'primeng/multiselect';
import { ProgressBarModule } from 'primeng/progressbar';
import { SliderModule } from 'primeng/slider';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';


@NgModule({
  declarations: [
    DocumentBPageComponent
  ],
  imports: [
    CommonModule,
    DocumentBPageRoutingModule,
    HeaderBModule,
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
    MatDialogModule,
    FormsModule,
    MatSelectModule
  ]
})
export class DocumentBPageModule { }
