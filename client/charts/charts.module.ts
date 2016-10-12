import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// angular 2 highcharts
import { ChartModule } from 'angular2-highcharts';

// charts
import {BarChartComponent} from './barchart';

@NgModule({
    imports: [
        CommonModule,
        ChartModule
    ],
    declarations: [
        BarChartComponent
    ],
    exports: [        
        BarChartComponent
    ],
    providers: [
    ]
})

export class ChartsModule { }