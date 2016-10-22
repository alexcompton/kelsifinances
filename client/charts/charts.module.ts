import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// angular 2 highcharts
import { ChartModule } from 'angular2-highcharts';

// charts
import {BarChartComponent} from './barchart';
import {LineChartComponent} from './linechart';
import {AreaChartComponent} from './areachart';
import {PieChartComponent} from './piechart';

@NgModule({
    imports: [
        CommonModule,
        ChartModule
    ],
    declarations: [
        BarChartComponent,
        LineChartComponent,
        AreaChartComponent,
        PieChartComponent
    ],
    exports: [        
        BarChartComponent,
        LineChartComponent,
        AreaChartComponent,
        PieChartComponent
    ],
    providers: [
    ]
})

export class ChartsModule { }