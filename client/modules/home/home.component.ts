import { Component, OnInit } from "@angular/core";
import { ApiService } from "../../service/api.service";

// items for the page
import { HomeService } from "./home.service";
import { BalanceItem } from "./balance-table";

@Component({
    selector: "home",
    templateUrl: `client/modules/home/home.component.html`
})

export class HomeComponent implements OnInit {

    //// Don't delete as a template for serverside js authentication
    // constructor(private apiService: ApiService) {}
    // protected() {
    //     this.apiService
    //         .get("/api")
    //         .subscribe(
    //             (data) => { this.response = data; },
    //             (error: Error) => {
    //                 this.error = error.message;
    //                 setTimeout(() => this.error = null, 4000)
    //             });
    // }

    private balanceTable: Array<BalanceItem>;

    constructor(private homeService: HomeService){        
    }

    ngOnInit(){
        this.balanceTable = new Array<BalanceItem>();
        this.getBalanceTable();
    }

    getBalanceTable(){
        this.homeService.getTableData()
            .subscribe(
                balanceTable => {
                    this.balanceTable = balanceTable;
                },
                error => {
                    let errorMessage: string = <any>error;
                    alert('Error getting table data:\n\n'
                        + errorMessage);
                }
            );
    }
}
