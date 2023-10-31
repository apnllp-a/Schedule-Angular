import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DialogDocumentComponent } from './dialog-document.component';

const routes: Routes = [{ path: '', component: DialogDocumentComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DialogDocumentRoutingModule { }
