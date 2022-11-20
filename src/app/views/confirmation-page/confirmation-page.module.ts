import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfirmationPageRoutingModule } from './confirmation-page-routing.module';
import { ConfirmationPageComponent } from './confirmation-page.component';
import { HeaderItModule } from 'src/app/shared/components/header-it/header-it.module';
import { ConfirmationTableModule } from 'src/app/shared/components/confirmation-table/confirmation-table.module';


@NgModule({
  declarations: [ConfirmationPageComponent],
  imports: [
    CommonModule,
    ConfirmationPageRoutingModule,
    HeaderItModule,
    ConfirmationTableModule
  ],exports: [ConfirmationPageRoutingModule],
})
export class ConfirmationPageModule { }
