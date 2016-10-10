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

    removeBalanceItem(id: string): Observable<boolean> {

        let mongoUrl: string = this.removeBalanceItemUrl(id);
        
        return this.http.delete(mongoUrl)
            .map(this.extractCrudResponse)
            .catch(this.handleError);
    }

    addBalanceItem(balanceItem: BalanceItem): Observable<boolean> {

        let date: Date = new Date(balanceItem.date);

        let mongoUrl: string = this.addBalanceItemUrl();
        let header = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: header });
        let body: any = {
            paycheck : balanceItem.paycheck.toFixed(2),
            savingsbal : balanceItem.savings.toFixed(2),
            checkingbal : balanceItem.checking.toFixed(2),
            creditcardbal : balanceItem.credit.toFixed(2),
            date : {"$date": date.toISOString()}
        };
        
        return this.http.post(mongoUrl, body, options)
            .map(this.extractCrudResponse)
            .catch(this.handleError);
    }

    updateBalanceItem(balanceItem: BalanceItem): Observable<boolean> {

        let date: Date = new Date(balanceItem.date);
        
        let mongoUrl: string = this.updateBalanceItemUrl(balanceItem.id);
        let header = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: header });
        let body: any = {
            paycheck : balanceItem.paycheck.toFixed(2),
            savingsbal : balanceItem.savings.toFixed(2),
            checkingbal : balanceItem.checking.toFixed(2),
            creditcardbal : balanceItem.credit.toFixed(2),
            date : {"$date": date.toISOString()}
        };
        
        return this.http.put(mongoUrl, body, options)
            .map(this.extractCrudResponse)
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

    private updateBalanceItemUrl(id: string): string {

        let database: string = "kelsi-finance";
        let collection: string = "bankbalance"
        let mongoUrl: string = encodeURI(
            'https://api.mlab.com/api/1/databases/' + database +
            '/collections/' + collection +
            '/' + id +
            '?apiKey=6xLMCqJpdzLNq-4vayoibe5PIljX6LiO'
        );
        
        return mongoUrl;
    }

    private addBalanceItemUrl(): string {

        let database: string = "kelsi-finance";
        let collection: string = "bankbalance"
        let mongoUrl: string = encodeURI(
            'https://api.mlab.com/api/1/databases/' + database +
            '/collections/' + collection +
            '?apiKey=6xLMCqJpdzLNq-4vayoibe5PIljX6LiO'
        );

        return mongoUrl;
    }

    private removeBalanceItemUrl(id: string): string {

        let database: string = "kelsi-finance";
        let collection: string = "bankbalance"
        let mongoUrl: string = encodeURI(
            'https://api.mlab.com/api/1/databases/' + database +
            '/collections/' + collection +
            '/' + id +
            '?apiKey=6xLMCqJpdzLNq-4vayoibe5PIljX6LiO'
        );

        return mongoUrl;
    }

    private extractTableData(rsp: any): Array<BalanceItem> {

        let balanceTable = new Array<BalanceItem>();
        let response: Array<any> = JSON.parse(rsp._body);
        let count: number = response.length;
        
        for (let i = 0; i < count; i++) {

            let id: string = response[i]._id.$oid;
            let date: Date = new Date(response[i].date.$date) || new Date(1970,1,1);
            let check: number = response[i].checkingbal || 0.0;
            let save: number = response[i].savingsbal || 0.0;
            let pay: number = response[i].paycheck || 0.0;
            let credit: number = response[i].creditcardbal || 0.0;
            
            let item: BalanceItem = new BalanceItem(date, check, save, pay, credit, id);        
            balanceTable.push(item);
        }

        return balanceTable;
    }

    private extractCrudResponse(rsp: any): boolean {
        let statusCode: number = rsp.status;
        return (statusCode === 200) ? true : false;
    }

    private handleError(error: any) {
        let err: any = JSON.parse(error._body);
        return Observable.throw(err.error.message);
    }
}