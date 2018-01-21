import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-result-box',
    templateUrl: 'result-box.component.html',
    styleUrls: ['result-box.component.scss']
})
export class ResultBoxComponent implements OnInit {
    @Input() process;
    public metricsFailed: boolean;
    public buildFailed: boolean;
    public unitTestsFailed: boolean;
    public functionalTestsFailed: boolean;
    public ngClass;
    ngOnInit() {
        this.setNgClass();
        this.checkFailurePoint();
    }


    private setNgClass() {
        this.ngClass = {
            'yellow': this.process.state === 'complete' || this.process.state === 'accepted',
            'danger': this.process.state === 'rejected'
        };
    }




    private checkFailurePoint() {
        if (this.process.metrics.failed) {
            return this.metricsFailed = true;
        } else if (this.process.build.failed) {
            return this.buildFailed = true;
        } else if (this.process.unitTests.failed) {
            return this.unitTestsFailed = true;
        } else if (this.process.functionalTests.failed) {
            return this.functionalTestsFailed = true;
        }
    }


}
