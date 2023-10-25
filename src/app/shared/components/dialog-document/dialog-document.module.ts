import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DialogDocumentRoutingModule } from './dialog-document-routing.module';
import { DialogDocumentComponent } from './dialog-document.component';


@NgModule({
  declarations: [
    DialogDocumentComponent
  ],
  imports: [
    CommonModule,
    DialogDocumentRoutingModule
  ]
})
export class DialogDocumentModule { }
