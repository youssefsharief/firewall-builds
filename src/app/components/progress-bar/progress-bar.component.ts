import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-progress-bar',
    templateUrl: 'progress-bar.component.html',
    styleUrls: ['progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit {
    @Input() data;
    @Input() percentCompleted: number;
    public ngClass;
    public width;

    ngOnInit() {
        this.ngClass = {
            'primary': this.percentCompleted,
            'success': this.data && !this.data.failed,
            'danger': this.data && this.data.failed,
            'gray': !this.data && !this.percentCompleted,
        };
        this.width =  this.percentCompleted ? `${this.percentCompleted}%` : this.data ? '100%' : '0%';
    }
}
