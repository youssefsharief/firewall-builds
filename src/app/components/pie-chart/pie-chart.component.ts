import { Component } from '@angular/core';

@Component({
    selector: 'app-pie-chart',
    templateUrl: 'pie-chart.component.html',
})
export class PieChartComponent {
    pieChartData = [92, 18];

    public pieChartColors: Array<any> = [
        {
            backgroundColor: [ '#72AC4D', '#EB7D3B'],
            borderColor: '#72AC4D',
            pointBackgroundColor: '#72AC4D',
            pointBorderColor: '#fff',
        },

    ];

    chartHovered(e) {
        console.log('ssssss');
    }

    chartClicked(e) {
        console.log('show modal');
    }

}
