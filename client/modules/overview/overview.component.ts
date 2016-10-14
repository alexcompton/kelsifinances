import { Component, OnInit } from "@angular/core";
import { ApiService } from "../../service/api.service";

// items for the page
import { OverviewService } from "./overview.service";

// charts
import { BarChart } from '../../charts/barchart';
import { LineChart } from '../../charts/linechart';
import { AreaChart } from '../../charts/Areachart';

@Component({
    selector: "overview",
    templateUrl: `client/modules/overview/overview.component.html`
})

export class OverviewComponent implements OnInit {

    // charts options
    private balanceChart: AreaChart;
    private creditChart: LineChart;
    private debtChart: BarChart;

    constructor(private overviewService: OverviewService) {
    }

    ngOnInit() {
        this.getBalanceChart();
        this.getCreditChart();
        this.getDebtChart();
    }

    getBalanceChart(){
        this.balanceChart = new AreaChart();
        this.overviewService.getBalanceChart()
            .subscribe(
                    areaChart => {
                        this.balanceChart = areaChart;
                    },
                    error => {
                        let errorMessage: string = <any>error;
                        alert('Error retrieving balance:\n\n'
                            + errorMessage);
                    }
                ); 
    }

    getDebtChart(){
        this.debtChart = new BarChart();
        this.overviewService.getDebtChart()
            .subscribe(
                    barChart => {
                        this.debtChart = barChart;
                    },
                    error => {
                        let errorMessage: string = <any>error;
                        alert('Error retrieving debts:\n\n'
                            + errorMessage);
                    }
                ); 
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
