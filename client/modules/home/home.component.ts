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
    private balanceItem: BalanceItem;

    constructor(private homeService: HomeService) {
    }

    ngOnInit() {
        this.balanceItem = new BalanceItem();
        this.balanceTable = new Array<BalanceItem>();
        this.getBalanceTable();
    }

    addBalanceItem() {
        this.homeService.addBalanceItem(this.balanceItem)
            .subscribe(
                success => {
                    let str: string = (success) ? 
                        "Item successfully inserted." :
                        "Item insert failed.";
                    alert(str);
                    this.getBalanceTable();
                },
                error => {
                    let errorMessage: string = <any>error;
                    alert('Error adding item:\n\n'
                        + errorMessage);
                }
            );        
    }

    editBalanceItem(index: number){
        alert("not implemented yet!");
    }

    removeBalanceItem(index: number){
        this.homeService.removeBalanceItem(this.balanceTable[index].id)
            .subscribe(
                success => {
                    let str: string = (success) ? 
                        "Item successfully removed." :
                        "Item delete failed.";
                    alert(str);
                    this.getBalanceTable();
                },
                error => {
                    let errorMessage: string = <any>error;
                    alert('Error removing item:\n\n'
                        + errorMessage);
                }
            ); 
    }

    getBalanceTable() {
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

    getCheckingLayout(checking: number): string {
        if (checking > 1500) {
            return 'positive';
        } else if (checking < 500) {
            return 'warning';
        } else {
            return '';
        }
    }

    getSavingsLayout(savings: number): string {
        if (savings > 2000) {
            return 'positive';
        } else if (savings < 1000) {
            return 'warning';
        } else {
            return '';
        }
    }
    
    getCreditLayout(credit: number): string {
        if (credit < 200) {
            return 'positive';
        } else if (credit > 500) {
            return 'warning';
        } else {
            return '';
        }
    }
    
    getPaycheckLayout(paycheck: number): string {
        if (paycheck > 1000) {
            return 'positive';
        } else {
            return '';
        }
    }
}
