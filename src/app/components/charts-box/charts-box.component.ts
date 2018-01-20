import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-charts-box',
    templateUrl: 'charts-box.component.html',
    styleUrls: ['charts-box.component.scss']
})

export class ChartsBoxComponent implements OnInit {
    passedPercent: number;
    themedClass: string;
    @Input() title: string;
    @Input() testsData;


    ngOnInit() {
        this.passedPercent = this.testsData.countPassed / this.testsData.countPassed + this.testsData.countFailed;
        if (this.passedPercent < 0.5) {
            return this.themedClass = 'text-danger';
        } else if (this.passedPercent < 0.7) {
            return this.themedClass = 'text-warn';
        } else {
            return this.themedClass = 'text-success';
        }
    }

}
