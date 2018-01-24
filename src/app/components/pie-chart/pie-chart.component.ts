import * as Chart from 'chart.js';
import { ViewChild, Component, ElementRef, OnInit, Input } from '@angular/core';
import 'chart.piecelabel.js';
import { environment } from '../../../environments/environment';
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
                    'backgroundColor': ['#72AC4D', '#EB7D3B'],
                    borderWidth: 1,
                }]
        };


        const options = {
            'type': 'pie',
            'data': data,
            options: {
                legend: {
                    display: false
                },
                tooltips: {
                    enabled: false
                },
                animation: false,
                pieceLabel: {
                    // render 'label', 'value', 'percentage', 'image' or custom function, default is 'percentage'
                    render: 'value',
                    fontColor: '#000',
                }
            }
        };
        if (environment.isAnimationEnabled) {
            delete options.options.animation;
        }
        const chart = new Chart(donutCtx, options);
    }

}
