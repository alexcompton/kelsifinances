import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpModule } from "@angular/http";
import { NgSemanticModule } from "ng-semantic";
import { CommonModule } from "@angular/common";
import { FormsModule }   from '@angular/forms';

import { HomeComponent } from "./home.component";
import { HomeService } from "./home.service";
import { routing } from "./home.routing";
import { SharedModule } from "../shared/shared.module";
import { ContactModule } from "../contact/contact.module";

// highcharts
import { ChartModule } from 'angular2-highcharts';

@NgModule({
    imports: [
        CommonModule,
        HttpModule,
        routing,
        SharedModule.forRoot(),
        NgSemanticModule,
        ContactModule,
        ChartModule,
        FormsModule
    ],
    declarations: [
        HomeComponent
    ],
    bootstrap: [
        HomeComponent
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ],
    providers: [
        HomeService
    ]
})
export class HomeModule { }