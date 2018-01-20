import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-charts-box',
    templateUrl: 'charts-box.component.html',
    styleUrls: ['charts-box.component.scss']
})
export class ChartsBoxComponent {
    @Input() percentageMagnitude: number;


    public themedClass() {
        if (this.percentageMagnitude < 50) {
            return 'text-danger';
        } else if (this.percentageMagnitude < 70) {
            return 'text-warn';
        } else {
            return 'text-success';
        }
    }
}
