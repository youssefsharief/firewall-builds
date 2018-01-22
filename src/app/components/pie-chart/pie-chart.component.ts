import * as Chart from 'chart.js';
import { ViewChild, Component, ElementRef, OnInit, Input } from '@angular/core';
import 'chart.piecelabel.js';
@Component({
    selector: 'app-pie-chart',
    templateUrl: 'pie-chart.component.html',
    styleUrls: ['pie-chart.component.scss']
})
export class PieChartComponent implements OnInit {

    @ViewChild('pie') pie: ElementRef;
    @Input() countPassed: number;
    @Input() countFailed: number;

    constructor(
    ) { }

    ngOnInit() {
        const donutCtx = this.pie.nativeElement.getContext('2d');

        const data = {
            labels: [
                'Value A',
                'Value B'
            ],
            datasets: [
                {
                    'data': [this.countPassed, this.countFailed],
                    'backgroundColor': ['#72AC4D', '#EB7D3B']
                }]
        };

        const chart = new Chart(
            donutCtx,
            {
                'type': 'pie',
                'data': data,
                options: {
                    legend: {
                        display: false
                     },
                    pieceLabel: {
                        // render 'label', 'value', 'percentage', 'image' or custom function, default is 'percentage'
                        render: 'value',
                    }
                }

            }
        );
    }

}