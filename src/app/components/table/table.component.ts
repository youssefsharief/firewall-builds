import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { StateColorMapperService } from '../../services/state-color-mapper.service';
import { trigger, state, style, transition, animate } from '@angular/core';
import { DataAnalyzerService } from '../../services/data-analyzer.service';

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
        private stateColorMapperService: StateColorMapperService,
        private dataAnalyzerService: DataAnalyzerService
    ) { }


    data;
    selected;

    ngOnInit() {
        this.subscribeToDataSource();
    }

    private subscribeToDataSource() {
        this.dataService.dataSource().subscribe(
            x => {
                if (Array.isArray(x)) {
                    this.data = this.dataAnalyzerService.analyzeData(x);
                } else {
                    let toBeChanged = this.data.find(item => item._id === x._id);
                    toBeChanged = x;
                }
            }
        );
    }

    public cursorStyle(element) {
        if (!(element.state === 'pending') && !this.isOpened(element)) {
            return { cursor: 'pointer' };
        }
    }

    public isOpened(element) {
        return this.selected && element._id === this.selected._id;
    }


    public themeColor(x) {
        return this.stateColorMapperService.themeColor(x);
    }

    public select(x) {
        if (this.cursorStyle(x)) {
            this.selected = x;
        }
    }

}
