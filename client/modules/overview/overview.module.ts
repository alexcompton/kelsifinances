import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpModule } from "@angular/http";
import { NgSemanticModule } from "ng-semantic";
import { CommonModule } from "@angular/common";
import { FormsModule }   from '@angular/forms';

import { OverviewComponent } from "./overview.component";
import { OverviewService } from "./overview.service";
import { routing } from "./overview.routing";
import { SharedModule } from "../shared/shared.module";
import { ContactModule } from "../contact/contact.module";
import { ChartsModule } from '../../charts/charts.module';

@NgModule({
    imports: [
        CommonModule,
        HttpModule,
        routing,
        SharedModule.forRoot(),
        NgSemanticModule,
        ContactModule,
        ChartsModule,
        FormsModule
    ],
    declarations: [
        OverviewComponent
    ],
    bootstrap: [
        OverviewComponent
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ],
    providers: [
        OverviewService
    ]
})
export class OverviewModule { }