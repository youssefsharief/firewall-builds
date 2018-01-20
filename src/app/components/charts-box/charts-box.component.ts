import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-charts-box',
    templateUrl: 'charts-box.component.html',
    styleUrls: ['charts-box.component.scss']
})
export class ChartsBoxComponent {
    @Input() passedPercent: number;
    coveragePercent = 70;

    public themedClass() {
        if (this.passedPercent < 50) {
            return 'text-danger';
        } else if (this.passedPercent < 70) {
            return 'text-warn';
        } else {
            return 'text-success';
        }
    }
}
