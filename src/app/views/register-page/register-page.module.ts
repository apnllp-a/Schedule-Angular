import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterPageRoutingModule } from './register-page-routing.module';
import { FormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    RegisterPageRoutingModule,
    MatFormFieldModule
  ]
})
export class RegisterPageModule { }
