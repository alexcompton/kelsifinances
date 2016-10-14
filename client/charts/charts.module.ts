import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// angular 2 highcharts
import { ChartModule } from 'angular2-highcharts';

// charts
import {BarChartComponent} from './barchart';
import {LineChartComponent} from './linechart';
import {AreaChartComponent} from './areachart';

@NgModule({
    imports: [
        CommonModule,
        ChartModule
    ],
    declarations: [
        BarChartComponent,
        LineChartComponent,
        AreaChartComponent
    ],
    exports: [        
        BarChartComponent,
        LineChartComponent,
        AreaChartComponent
    ],
    providers: [
    ]
})

export class ChartsModule { }