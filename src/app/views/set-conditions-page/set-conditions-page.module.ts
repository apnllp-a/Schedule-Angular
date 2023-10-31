import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SetConditionsPageRoutingModule } from './set-conditions-page-routing.module';
import { SetConditionsPageComponent } from './set-conditions-page.component';
import { HeaderModule } from 'src/app/shared/components/header-hr/header.module';


@NgModule({
  declarations: [
    SetConditionsPageComponent
  ],
  imports: [
    CommonModule,
    SetConditionsPageRoutingModule,
    HeaderModule,
  ]
})
export class SetConditionsPageModule { }
