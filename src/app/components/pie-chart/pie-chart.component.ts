import * as Chart from 'chart.js';
import { ViewChild, Component, ElementRef, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-pie-chart',
    templateUrl: 'pie-chart.component.html',
    styleUrls: ['pie-chart.component.scss']
})
export class PieChartComponent implements OnInit {
    // pieChartData = [92, 18];

    // public pieChartColors: Array<any> = [
    //     {
    //         backgroundColor: [ '#72AC4D', '#EB7D3B'],
    //         borderColor: '#72AC4D',
    //         pointBackgroundColor: '#72AC4D',
    //         pointBorderColor: '#fff',
    //     },

    // ];

    // chartHovered(e) {
    //     console.log('ssssss');
    // }

    // chartClicked(e) {
    //     console.log('show modal');
    // }


    @ViewChild('donut') donut: ElementRef;
    @Input() countPassed: number;
    @Input() countFailed: number;

    constructor(
    ) {   }

    ngOnInit() {
        const donutCtx = this.donut.nativeElement.getContext('2d');

        const data = {
            labels: [
                'Value A',
                'Value B'
            ],
            datasets: [
                {
                    'data': [this.countPassed, this.countFailed],
                    'backgroundColor': [ '#72AC4D', '#EB7D3B']
                }]
        };

        const chart = new Chart(
            donutCtx,
            {
                'type': 'pie',
                'data': data,
                'options': {
                    'cutoutPercentage': 50,
                    'animation': {
                        'animateScale': true,
                        'animateRotate': false
                    }
                }
            }
        );
    }

}