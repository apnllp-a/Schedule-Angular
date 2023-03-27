import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocumentBPageComponent } from './document-b-page.component';

const routes: Routes = [{ path: '', component: DocumentBPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocumentBPageRoutingModule { }
