import { Injectable } from '@angular/core';
import { Headers, Response, Http, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

// shared objects
import { BalanceItem } from "./balance-table";

@Injectable()
export class HomeService {

    constructor(private http: Http) { }

    getTableData(): Observable<Array<BalanceItem>> {

        let mongoUrl: string = this.getTableURL();

        return this.http.get(mongoUrl)
            .map(this.extractTableData)
            .catch(this.handleError);
    }

    private getTableURL(): string {

        let database: string = "kelsi-finance";
        let collection: string = "bankbalance"
        let mongoUrl: string = encodeURI(
            'https://api.mlab.com/api/1/databases/' + database +
            '/collections/' + collection +
            '?s={date:-1}&apiKey=6xLMCqJpdzLNq-4vayoibe5PIljX6LiO'
        );

        return mongoUrl;
    }

    private extractTableData(rsp: any): Array<BalanceItem> {

        let balanceTable = new Array<BalanceItem>();
        let response: Array<any> = JSON.parse(rsp._body);
        let count: number = response.length;

        for (let i = 0; i < count; i++) {

            let date: Date = new Date(response[i].date.$date) || new Date(1970,1,1);
            let check: number = response[i].checkingbal || 0.0;
            let save: number = response[i].savingsbal || 0.0;
            let pay: number = response[i].paycheck || 0.0;
            let credit: number = response[i].creditcardbal || 0.0;

            let item: BalanceItem = new BalanceItem(date, check, save, pay, credit);
            balanceTable.push(item);
        }

        return balanceTable;
    }

    private handleError(error: any) {
        let err: any = JSON.parse(error._body);
        return Observable.throw(err.error.message);
    }
}