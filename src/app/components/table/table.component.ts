import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { StateColorMapperService } from '../../services/state-color-mapper.service';
import { trigger, state, style, transition, animate } from '@angular/core';

@Component({
    selector: 'app-table',
    templateUrl: 'table.component.html',
    styleUrls: ['table.component.scss'],
    animations: [
        trigger('myAnimation',
            [transition(':enter',
                [
                    style({ opacity: 0 }),
                    animate('300ms', style({ 'opacity': 1 }))
                ]),
            ])
    ]
})


export class TableComponent implements OnInit {

    constructor(
        private dataService: DataService,
        private stateColorMapperService: StateColorMapperService
    ) { }


    data;
    selected;

    ngOnInit() {
        this.dataService.dataSource().subscribe(
            x => {
                if (Array.isArray(x)) {
                    this.checkFailurePointIfExists(x);
                    this.data = x;
                } else {
                    let toBeChanged = this.data.find(item => item._id === x._id);
                    toBeChanged = x;
                }
            }
        );

    }

    checkFailurePointIfExists(x) {
        x.forEach(process => {
            if (process.metrics) {
                Object.keys(process.metrics).forEach(metric => {
                    if (!process.metrics[metric].isPositive) {
                        process.metrics.failed = true;
                        console.log('lolo');
                        return;
                    }
                });
            }
        });
    }

    cursorStyle(element) {
        if (!(element.state === 'pending') && !this.isOpened(element)) {
            return { cursor: 'pointer' };
        }
    }

    isOpened(element) {
        return this.selected && element._id === this.selected._id;
    }


    themeColor(x) {
        return this.stateColorMapperService.themeColor(x);
    }

    select(x) {
        if (this.cursorStyle(x)) {
            this.selected = x;
        }
    }

    isNumber(x) {
        return Number.isSafeInteger(x);
    }
}
