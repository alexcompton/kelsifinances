import { Component, Input } from '@angular/core';

@Component({
    selector: 'linechart',
    template: '<div class="ui segment raised" style="background-color: #f2f7ff;"><chart [options]="lineChart"></chart></div>',
    styles: ['chart { display: block; background-image: url("http://www.highcharts.com/samples/graphics/sand.png"); }']
})

export class LineChartComponent {
    @Input() lineChart: LineChart;
}

export class LineChart {

    public series: Array<LineChart.Series>;
    public colors: string[];
    public chart: LineChart.Chart;
    public title: LineChart.Title;
    public subtitle: LineChart.Subtitle;
    public xAxis: LineChart.XAxis;
    public yAxis: LineChart.YAxis;
    public tooltip: LineChart.Tooltip;
    public plotOptions: LineChart.PlotOptions;
    public legend: LineChart.Legend;
    public credits: LineChart.Credits;
    public labels: LineChart.Labels;
    public drilldown: LineChart.Drilldown;
    public navigation: LineChart.Navigation;
    public rangeSelector: LineChart.RangeSelector;
    public navigator: LineChart.Navigator;
    public scrollbar: LineChart.Scrollbar;
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

        this.chart = new LineChart.Chart();

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
            borderWidth: 0,
            headerFormat: '<b>Balance on: {point.x}</b><br/>',
            shared: true,
            crosshairs: true,
            valuePrefix: '$'
        };

        this.plotOptions = {
            series: {
                shadow: true,
                marker: {
                    enabled: false
                }
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
            },
            area: {
                stacking: 'normal'
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

export module LineChart {

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
        public zoomType: string;

        constructor() {
            this.setDefault();
        }

        setDefault() {

            this.type = 'line';
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