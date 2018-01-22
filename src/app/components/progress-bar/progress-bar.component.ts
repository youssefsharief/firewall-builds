import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-progress-bar',
    templateUrl: 'progress-bar.component.html',
    styleUrls: ['progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit {
    @Input() data;
    public ngClass;
    public width;

    ngOnInit() {
        this.ngClass = {
            'success': this.data && !this.data.failed && !this.data.percentCompleted,
            'danger': this.data && this.data.failed,
            'gray': !this.data,
            'primary': this.data && this.data.percentCompleted
        };
        this.width =  !this.data ? '0%' : this.data.percentCompleted ? `${this.data.percentCompleted}%` : '100%';
    }
}
