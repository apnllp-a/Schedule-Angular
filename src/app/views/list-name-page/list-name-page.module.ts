import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListNamePageRoutingModule } from './list-name-page-routing.module';
import { ListNamePageComponent } from './list-name-page.component';
import { HeaderItModule } from 'src/app/shared/components/header-it/header-it.module';
import { ListNameTableModule } from 'src/app/shared/components/list-name-table/list-name-table.module';
import { MatFormFieldModule } from '@angular/material/form-field';


@NgModule({
  declarations: [ListNamePageComponent],
  imports: [
    CommonModule,
    ListNamePageRoutingModule,
    HeaderItModule,
    ListNameTableModule,
    MatFormFieldModule
  ],exports:[ ListNamePageComponent]
})
export class ListNamePageModule { }
