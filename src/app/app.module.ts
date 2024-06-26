import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatTableModule } from "@angular/material/table";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlatpickrModule } from 'angularx-flatpickr';
import { CommonModule } from '@angular/common';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatPaginatorModule} from '@angular/material/paginator';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { CalendarTableModule } from "./shared/components/calendar-table/calendar-table.module";
import { NavbarModule } from './shared/components/navbar/navbar.module';
import { HttpClientModule } from '@angular/common/http';
import { MatNativeDateModule } from '@angular/material/core';
import { HeaderItModule } from './shared/components/header-it/header-it.module';
import { MaterialExampleModule } from 'material.module';
import { RegisterPageModule } from './views/register-page/register-page.module';
import { RegisterPageComponent } from './views/register-page/register-page.component';
import { LoginPageComponent } from './views/login-page/login-page.component';
@NgModule({
    declarations: [
        AppComponent,
        RegisterPageComponent,
        LoginPageComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FontAwesomeModule,
        MatTableModule,
        CommonModule,
        FormsModule,
        NgbModalModule,
        FlatpickrModule,
        BrowserAnimationsModule,
        MatPaginatorModule,
        MatFormFieldModule,
        ReactiveFormsModule,
        LayoutModule,
        MatToolbarModule,
        MatButtonModule,
        MatSidenavModule,
        MatIconModule,
        MatListModule,
        MatGridListModule,
        MatCardModule,
        MatMenuModule,
        CalendarTableModule,
        NavbarModule,
        NoopAnimationsModule,
        HttpClientModule,
        MatNativeDateModule,
        HeaderItModule,
        MaterialExampleModule,
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule
        
    ],
   
    bootstrap: [AppComponent]
})
export class AppModule { }
