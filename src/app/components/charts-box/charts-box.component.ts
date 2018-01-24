import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-charts-box',
    templateUrl: 'charts-box.component.html',
    styleUrls: ['charts-box.component.scss']
})

export class ChartsBoxComponent implements OnInit {
    public passedPercent: number;
    public themedClass: string;
    @Input() testsData;


    ngOnInit() {
        this.passedPercent = Math.round(this.testsData.countPassed / (this.testsData.countPassed + this.testsData.countFailed) * 100);
        if (this.passedPercent < 50) {
            return this.themedClass = 'text-danger';
        } else if (this.passedPercent < 70) {
            return this.themedClass = 'text-warn';
        } else {
            return this.themedClass = 'text-success';
        }
    }

}
