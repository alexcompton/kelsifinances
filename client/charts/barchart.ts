import { Component, Input } from '@angular/core';

@Component({
    selector: 'barchart',
    template: '<div class="ui segment raised" style="background-color: #f2f7ff;"><chart [options]="barChart"></chart></div>',
    styles: ['chart { display: block; background-image: url("http://www.highcharts.com/samples/graphics/sand.png"); }']
})

export class BarChartComponent {
    @Input() barChart: BarChart;
}

export class BarChart {

    public series: Array<BarChart.Series>;
    public colors: string[];
    public chart: BarChart.Chart;
    public title: BarChart.Title;
    public subtitle: BarChart.Subtitle;
    public xAxis: BarChart.XAxis;
    public yAxis: BarChart.YAxis;
    public tooltip: BarChart.Tooltip;
    public plotOptions: BarChart.PlotOptions;
    public legend: BarChart.Legend;
    public credits: BarChart.Credits;
    public labels: BarChart.Labels;
    public drilldown: BarChart.Drilldown;
    public navigation: BarChart.Navigation;
    public rangeSelector: BarChart.RangeSelector;
    public navigator: BarChart.Navigator;
    public scrollbar: BarChart.Scrollbar;
    public legendBackgroundColor: string;
    public background2: string;
    public dataLabelsColor: string;
    public textColor: string;
    public contrastTextColor: string;
    public maskColor: string;

    constructor() {
        this.setDefaultChart();
    }

    setDefaultChart() {

        this.series = [{
            name: 'series 1',
            data: [5, 3, 4, 7, 2]
        }, {
            name: 'series 2',
            data: [2, 2, 3, 2, 1]
        }, {
            name: 'series 3',
            data: [3, 4, 4, 2, 5]
        }];

        this.colors = [
            '#22ccff',
            '#ccbbbb',
            '#aabbcc',
            '#332233',
            '#99eeff',
            '#555566',
            '#886688',
            '#55aacc',
            '#777777',
            '#6688bb',
        ];

        this.chart = new BarChart.Chart();

        this.title = {
            text: 'simple chart',
            style: {
                color: '#6e6e70',
                fontSize: '16px',
                fontWeight: 'bold'
            }
        };

        this.subtitle = {
            style: {
                color: '#6e6e70'
            }
        };

        this.xAxis = {
            categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas'],
            labels: {
                style: {
                    color: '#6e6e70'
                }
            },
            tickInterval: 5
        };

        this.yAxis = {
            title: {
                text: 'Total fruit consumption'
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

        this.tooltip = {
            borderWidth: 0,
            headerFormat: '<b>Balance on: {point.x}</b><br/>',
            shared: true
        };

        this.plotOptions = {
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
                    enabled: true
                }
            }
        };

        this.legend = {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            itemStyle: {
                fontWeight: 'bold',
                fontSize: '13px'
            },
            borderColor: '#CCC',
            borderWidth: 1,
            shadow: false
        };

        this.credits = {
            style: {
                color: '#666'
            }
        };

        this.labels = {
            style: {
                color: '#707073'
            }
        };

        this.drilldown = {
            activeAxisLabelStyle: {
                color: '#F0F0F3'
            },
            activeDataLabelStyle: {
                color: '#F0F0F3'
            }
        };

        this.navigation = {
            buttonOptions: {
                symbolStroke: '#DDDDDD',
                theme: {
                    fill: '#505053'
                }
            }
        };

        this.rangeSelector = {
            buttonTheme: {
                fill: 'white',
                stroke: '#C0C0C8',
                'stroke-width': 1,
                states: {
                    select: {
                        fill: '#D0D0D8'
                    }
                }
            }
        };

        this.navigator = {
            xAxis: {
                gridLineColor: '#D0D0D8'
            }
        };

        this.scrollbar = {
            trackBorderColor: '#C0C0C8'
        };

        this.background2 = '#E0E0E8';
    }
}

export module BarChart {

    export class Series {

        public name: string;
        public data: Array<number>;

        constructor(name?: string, data?: Array<number>) {
            this.name = name || '';
            this.data = data || new Array<number>();
        }
    }

    export class Chart {

        public type: string;
        public plotBorderColor: string;
        public resetZoomButton: any;
        public backgroundColor: any;
        public style: any;

        constructor() {
            this.setDefault();
        }

        setDefault() {

            this.type = 'column';
            this.plotBorderColor = null;
            this.backgroundColor = {
                linearGradient: { x1: 1, y1: 1, x2: 1, y2: 1 },
                stops: [
                    [0, '#f2f7ff'],
                    [1, '#dee4ed']
                ]
            };

            this.resetZoomButton = {
                theme: {
                    display: 'none'
                }
            };

            this.style = {
                fontFamily: 'Signika, serif'
            };
        }
    }

    export class Title {

    }

    export class Subtitle {

    }

    export class XAxis {

    }

    export class YAxis {

    }

    export class Tooltip {

    }

    export class PlotOptions {

    }

    export class Legend {

    }

    export class Credits {

    }

    export class Labels {

    }

    export class Drilldown {

    }

    export class Navigation {

    }

    export class RangeSelector {

    }

    export class Navigator {

    }

    export class Scrollbar {

    }

}