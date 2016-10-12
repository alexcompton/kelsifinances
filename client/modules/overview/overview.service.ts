import { Injectable } from '@angular/core';
import { Headers, Response, Http, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

// charts
import { BarChart } from '../../charts/barchart';

@Injectable()
export class OverviewService {

    constructor(private http: Http) { }

    getBalanceChart(): Observable<BarChart> {

        let mongoUrl: string = this.getBalanceChartURL();

        return this.http.get(mongoUrl)
            .map(this.extractBalanceChartData)
            .catch(this.handleError);
    }

    getCreditChart(): Observable<BarChart> {

        let mongoUrl: string = this.getCreditChartURL();

        return this.http.get(mongoUrl)
            .map(this.extractCreditChartData)
            .catch(this.handleError);
    }

    private getBalanceChartURL(): string {

        let database: string = "kelsi-finance";
        let collection: string = "bankbalance"
        let mongoUrl: string = encodeURI(
            'https://api.mlab.com/api/1/databases/' + database +
            '/collections/' + collection +
            '?s={date:1}&apiKey=6xLMCqJpdzLNq-4vayoibe5PIljX6LiO'
        );

        return mongoUrl;
    }

    private getCreditChartURL(): string {

        let database: string = "kelsi-finance";
        let collection: string = "bankbalance"
        let mongoUrl: string = encodeURI(
            'https://api.mlab.com/api/1/databases/' + database +
            '/collections/' + collection +
            '?s={date:1}&apiKey=6xLMCqJpdzLNq-4vayoibe5PIljX6LiO'
        );

        return mongoUrl;
    }

    private extractBalanceChartData(rsp: any): BarChart {

        let barchart = new BarChart();
        let response: Array<any> = JSON.parse(rsp._body);
        let count: number = response.length;
        
        let dateArray: Array<string> = new Array<string>();
        barchart.series = new Array<BarChart.Series>();
        barchart.series.push(new BarChart.Series('Checking Account'));
        barchart.series.push(new BarChart.Series('Savings Account'));
        
        for (let i = 0; i < count; i++) {

            let id: string = response[i]._id.$oid;
            let date: Date = new Date(response[i].date.$date) || new Date(1970,1,1);
            let check: number = Number(response[i].checkingbal) || 0.0;
            let save: number = Number(response[i].savingsbal) || 0.0;
            let pay: number = Number(response[i].paycheck) || 0.0;
            let credit: number = Number(response[i].creditcardbal) * -1 || 0.0;
            
            dateArray.push(date.getMonth() + '/' + date.getDate() + '/' + date.getFullYear());
            barchart.series[0].data.push(check);
            barchart.series[1].data.push(save);
        }

        barchart.xAxis = {
            title: {
                text: 'Date/Time'
            },
            categories: dateArray,
            labels: {
                style: {
                    color: '#6e6e70'
                }
            }
        };

        barchart.plotOptions = {
            series: {
                shadow: true
            },
            candlestick: {
                lineColor: '#404048'
            },
            map: {
                shadow: false
            },
            column: {
                stacking: 'normal',
                dataLabels: {
                    enabled: false
                }
            }
        };

        barchart.title = {
            text: 'Bank Account Balance',
            style: {
                color: '#6e6e70',
                fontSize: '16px',
                fontWeight: 'bold'
            }
        };

        barchart.yAxis = {
            title: {
                text: 'Total Account Balance'
            },
            stackLabels: {
                enabled: false,
                style: {
                    fontWeight: 'bold'
                }
            },
            labels: {
                style: {
                    color: '#6e6e70'
                }
            }
        };        

        barchart.chart.backgroundColor = null;

        return barchart;
    }

    private extractCreditChartData(rsp: any): BarChart {

        let barchart = new BarChart();
        let response: Array<any> = JSON.parse(rsp._body);
        let count: number = response.length;
        
        let dateArray: Array<string> = new Array<string>();
        barchart.series = new Array<BarChart.Series>();
        barchart.series.push(new BarChart.Series('Credit Card Balance'));
        
        for (let i = 0; i < count; i++) {

            let id: string = response[i]._id.$oid;
            let date: Date = new Date(response[i].date.$date) || new Date(1970,1,1);
            let check: number = Number(response[i].checkingbal) || 0.0;
            let save: number = Number(response[i].savingsbal) || 0.0;
            let pay: number = Number(response[i].paycheck) || 0.0;
            let credit: number = Number(response[i].creditcardbal) || 0.0;
            
            dateArray.push(date.getMonth() + '/' + date.getDate() + '/' + date.getFullYear());
            barchart.series[0].data.push(credit);
        }

        barchart.xAxis = {
            title: {
                text: 'Date/Time'
            },
            categories: dateArray,
            labels: {
                style: {
                    color: '#6e6e70'
                }
            }
        };

        barchart.plotOptions = {
            series: {
                shadow: true
            },
            candlestick: {
                lineColor: '#404048'
            },
            map: {
                shadow: false
            },
            column: {
                stacking: 'normal',
                dataLabels: {
                    enabled: false
                }
            }
        };

        barchart.title = {
            text: 'Credit Card Balance',
            style: {
                color: '#6e6e70',
                fontSize: '16px',
                fontWeight: 'bold'
            }
        };

        barchart.yAxis = {
            title: {
                text: 'Credit Balance'
            },
            stackLabels: {
                enabled: false,
                style: {
                    fontWeight: 'bold'
                }
            },
            labels: {
                style: {
                    color: '#6e6e70'
                }
            }
        };

        return barchart;
    }

    private handleError(error: any) {
        let err: any = JSON.parse(error._body);
        return Observable.throw(err.error.message);
    }
}