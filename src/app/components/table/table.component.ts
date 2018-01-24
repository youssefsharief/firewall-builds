import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { StateColorMapperService } from '../../services/state-color-mapper.service';
import { DataAnalyzerService } from '../../services/data-analyzer.service';

@Component({
    selector: 'app-table',
    templateUrl: 'table.component.html',
    styleUrls: ['table.component.scss'],
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
        this.dataService.dataSource().subscribe(x => this.checkDataTypeAndActAccordingly(x));
    }

    private checkDataTypeAndActAccordingly(x) {
        return Array.isArray(x) ? this.setListItemsFromApiPayload(x) : this.reflectChangeOnSingleItem(x);
    }

    private setListItemsFromApiPayload(x) {
        this.data = this.dataAnalyzerService.analyzeData(x);
    }

    private reflectChangeOnSingleItem(x) {
        this.data = this.data.map(process => {
            if (x._id === process._id) {
                const newData = this.dataAnalyzerService.analyzeData([x])[0];

                return {
                    name: process.name,
                    owner: process.owner,
                    location: process.location,
                    timeStarted: process.timeStarted,
                    _id: process._id,
                    type: process.type,
                    isRunning: newData.isRunning,
                    state: newData.state,
                    phase: newData.phase,
                    percentCompleted: newData.percentCompleted,
                    metrics: process.metrics ? process.metrics : newData.metrics,
                    build: process.build ? process.build : newData.build,
                    unitTests: process.unitTests ? process.unitTests : newData.unitTests,
                    functionalTests: process.functionalTests ? process.functionalTests : newData.functionalTests,
                };
            } else {
                return process;

            }
        });
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
