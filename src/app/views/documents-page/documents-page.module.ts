import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatSelectModule} from '@angular/material/select';
import { DocumentsPageRoutingModule } from './documents-page-routing.module';
import { DocumentsPageComponent } from './documents-page.component';
import { HeaderModule } from 'src/app/shared/components/header-hr/header.module';
import {MatInputModule} from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatNativeDateModule } from '@angular/material/core';
import { MaterialExampleModule } from 'material.module';

@NgModule({
  declarations: [
    DocumentsPageComponent
  ],
  imports: [
    CommonModule,
    DocumentsPageRoutingModule,
    HeaderModule,
    MatSelectModule,
    MatInputModule,
    FormsModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MaterialExampleModule
  ]
})
export class DocumentsPageModule { }
