import { Component, OnInit } from "@angular/core";
import { ApiService } from "../../service/api.service";

// items for the page
import { OverviewService } from "./overview.service";

// charts
import { BarChart } from '../../charts/barchart';
import { LineChart } from '../../charts/linechart';
import { AreaChart } from '../../charts/areachart';
import { PieChart } from '../../charts/piechart';

@Component({
    selector: "overview",
    templateUrl: `client/modules/overview/overview.component.html`
})

export class OverviewComponent implements OnInit {

    // charts options
    private balanceChart: BarChart;
    private creditChart: LineChart;
    private debtChart: AreaChart;
    private currentDebtsPie: PieChart;

    constructor(private overviewService: OverviewService) {
    }

    ngOnInit() {
        this.getBalanceChart();
        this.getCreditChart();
        this.getDebtChart();
    }

    getBalanceChart(){
        this.balanceChart = new BarChart();
        this.overviewService.getBalanceChart()
            .subscribe(
                    barChart => {
                        this.balanceChart = barChart;
                    },
                    error => {
                        let errorMessage: string = <any>error;
                        alert('Error retrieving balance:\n\n'
                            + errorMessage);
                    }
                ); 
    }

    getDebtChart(){
        this.debtChart = new AreaChart();
        this.overviewService.getDebtChart()
            .subscribe(
                    areaChart => {
                        this.debtChart = areaChart;
                        this.getCurrentDebtsPie(areaChart);
                    },
                    error => {
                        let errorMessage: string = <any>error;
                        alert('Error retrieving debts:\n\n'
                            + errorMessage);
                    }
                ); 
    }

    getCurrentDebtsPie(areaChart: AreaChart){
        
        this.currentDebtsPie = new PieChart();
        
        this.currentDebtsPie.title = {
            text: 'Current Debts',
            style: {
                color: '#6e6e70',
                fontSize: '16px',
                fontWeight: 'bold'
            }
        };

        let pieSeries = new PieChart.Series('Current Debts');
        
        areaChart.series.forEach(element => {
            let len = element.data.length;
            let balance = element.data[len-1];
            pieSeries.data.push(new PieChart.Series.DataPoint(element.name, balance));
        });

        let array: Array<PieChart.Series> = new Array<PieChart.Series>();
        array.push(pieSeries);
        this.currentDebtsPie.series = array;
    }

    getCreditChart(){
        this.creditChart = new LineChart();
        this.overviewService.getCreditChart()
            .subscribe(
                    lineChart => {
                        this.creditChart = lineChart;
                    },
                    error => {
                        let errorMessage: string = <any>error;
                        alert('Error retrieving credit:\n\n'
                            + errorMessage);
                    }
                ); 
    }
}
