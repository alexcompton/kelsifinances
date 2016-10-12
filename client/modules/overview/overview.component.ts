import { Component, OnInit } from "@angular/core";
import { ApiService } from "../../service/api.service";

// items for the page
import { OverviewService } from "./overview.service";

// charts
import { BarChart } from '../../charts/barchart';

@Component({
    selector: "overview",
    templateUrl: `client/modules/overview/overview.component.html`
})

export class OverviewComponent implements OnInit {

    // charts options
    private balanceChart: BarChart;
    private creditChart: BarChart;

    constructor(private overviewService: OverviewService) {
    }

    ngOnInit() {
        this.getBalanceChart();
        this.getCreditChart();
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

    getCreditChart(){
        this.creditChart = new BarChart();
        this.overviewService.getCreditChart()
            .subscribe(
                    barChart => {
                        this.creditChart = barChart;
                    },
                    error => {
                        let errorMessage: string = <any>error;
                        alert('Error retrieving credit:\n\n'
                            + errorMessage);
                    }
                ); 
    }
}
