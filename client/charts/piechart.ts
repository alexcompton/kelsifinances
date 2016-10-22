import { Component, Input } from '@angular/core';

@Component({
    selector: 'piechart',
    template: '<div class="ui segment raised" style="background-color: #f2f7ff;"><chart [options]="pieChart"></chart></div>',
    styles: ['chart { display: block; background-image: url("http://www.highcharts.com/samples/graphics/sand.png"); }']
})

export class PieChartComponent {
    @Input() pieChart: PieChart;
}

export class PieChart {

    public series: Array<PieChart.Series>;
    public colors: string[];
    public chart: PieChart.Chart;
    public title: PieChart.Title;
    public subtitle: PieChart.Subtitle;
    public xAxis: PieChart.XAxis;
    public yAxis: PieChart.YAxis;
    public tooltip: PieChart.Tooltip;
    public plotOptions: PieChart.PlotOptions;
    public legend: PieChart.Legend;
    public credits: PieChart.Credits;
    public labels: PieChart.Labels;
    public drilldown: PieChart.Drilldown;
    public navigation: PieChart.Navigation;
    public rangeSelector: PieChart.RangeSelector;
    public navigator: PieChart.Navigator;
    public scrollbar: PieChart.Scrollbar;
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
            name: 'piechart type name',
            data: [
                {
                    name: 'first',
                    y: 13
                },
                {
                    name: 'second',
                    y: 15
                },
                {
                    name: 'third',
                    y: 20
                }
            ]
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

        this.chart = new PieChart.Chart();

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
            labels: {
                style: {
                    color: '#6e6e70'
                }
            },
            crosshair: {
                color: 'lightgrey',
                width: 1
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
            headerFormat: '<b>{series.name}</b><br/>',
            pointFormat: '{point.name} Total: <b>${point.y}</b><br/>' +
                '{point.name} Percent: <b>{point.percentage:.1f}%</b><br/>'
        };

        this.plotOptions = {
            pie: {
                dataLabels: {
                    enabled: false
                },
                showInLegend: true
            }
        };

        this.legend = {
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

export module PieChart {

    export class Series {

        public name: string;
        public data: Array<Series.DataPoint>;

        constructor(name?: string, data?: Array<Series.DataPoint>) {
            this.name = name || '';
            this.data = data || new Array<Series.DataPoint>();
        }
    }

    export module Series {

        export class DataPoint {

            public name: string;
            public y: number;

            constructor(name?: string, y?: number) {
                this.name = name || '';
                this.y = y || null;
            }
        }
    }

    export class Chart {

        public type: string;
        public plotBorderColor: string;
        public resetZoomButton: any;
        public backgroundColor: any;
        public style: any;
        public zoomType: string;

        constructor() {
            this.setDefault();
        }

        setDefault() {

            this.type = 'pie';
            this.plotBorderColor = null;
            this.zoomType = 'x';

            this.backgroundColor = {
                linearGradient: { x1: 1, y1: 1, x2: 1, y2: 1 },
                stops: [
                    [0, '#f2f7ff'],
                    [1, '#dee4ed']
                ]
            };

            this.resetZoomButton = {
                theme: {
                    fill: 'white',
                    stroke: 'silver',
                    r: 0,
                    states: {
                        hover: {
                            fill: '#41739D',
                            style: {
                                color: 'white'
                            }
                        }
                    }
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