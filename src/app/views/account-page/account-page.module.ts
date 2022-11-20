import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountPageRoutingModule } from './account-page-routing.module';
import { AccountPageComponent } from './account-page.component';
import { HeaderItModule } from "../../shared/components/header-it/header-it.module";
import { AccountModule } from "../../shared/components/account/account.module";


@NgModule({
    declarations: [AccountPageComponent],
    exports: [AccountPageComponent],
    imports: [
        CommonModule,
        AccountPageRoutingModule,
        HeaderItModule,
        AccountModule
    ]
})
export class AccountPageModule { }
