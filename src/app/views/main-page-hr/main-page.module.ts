import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainPageRoutingModule } from './main-page-routing.module';
import { HeaderModule } from 'src/app/shared/components/header-hr/header.module';
import { MainPageComponent } from './main-page.component';
import { CalendarTableModule } from 'src/app/shared/components/calendar-table/calendar-table.module';
import { HeaderBModule } from 'src/app/shared/components/header-b/header-b.module';
import { HeaderHdModule } from 'src/app/shared/components/header-hd/header-hd.module';
import { HeaderItModule } from 'src/app/shared/components/header-it/header-it.module';
import { CalenwdarModule } from "../../shared/components/calendar/calendar.module";


@NgModule({
    declarations: [MainPageComponent],
    imports: [
        CommonModule,
        MainPageRoutingModule,
        HeaderModule,
        HeaderBModule,
        HeaderHdModule,
        HeaderItModule,
        CalendarTableModule,
        CalenwdarModule
    ]
})
export class MainPageModule { }
