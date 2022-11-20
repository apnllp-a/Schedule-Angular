import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainPageItRoutingModule } from './main-page-it-routing.module';
import { MainPageItComponent } from './main-page-it.component';
import { HeaderModule } from 'src/app/shared/components/header-hr/header.module';
import { ConfirmationTableModule } from 'src/app/shared/components/confirmation-table/confirmation-table.module';
import { ListNameTableModule } from 'src/app/shared/components/list-name-table/list-name-table.module';
import {MatTabsModule} from '@angular/material/tabs';
import { CalendarTableModule } from 'src/app/shared/components/calendar-table/calendar-table.module';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { FlatpickrModule } from 'angularx-flatpickr';
import { FormsModule } from '@angular/forms';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderItModule } from 'src/app/shared/components/header-it/header-it.module';


@NgModule({
    declarations: [MainPageItComponent,
    ],
    imports: [
        CommonModule,
        MainPageItRoutingModule,
        HeaderModule,
        ConfirmationTableModule,
        ListNameTableModule,
        MatTabsModule,
        FormsModule,
        NgbModalModule,
        CalendarTableModule,
        FlatpickrModule.forRoot(),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
       HeaderItModule ,
       
    ]
})
export class MainPageItModule { }
