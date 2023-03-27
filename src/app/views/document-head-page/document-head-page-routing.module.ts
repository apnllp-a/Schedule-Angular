import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocumentHeadPageComponent } from './document-head-page.component';

const routes: Routes = [{ path: '', component: DocumentHeadPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocumentHeadPageRoutingModule { }
