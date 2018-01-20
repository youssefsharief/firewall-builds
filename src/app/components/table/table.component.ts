import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { StateColorMapperService } from '../../services/state-color-mapper.service';

@Component({
    selector: 'app-table',
    templateUrl: 'table.component.html',
    styleUrls: ['table.component.scss']

})


export class TableComponent implements OnInit {
    constructor(
        private dataService: DataService,
        private stateColorMapperService: StateColorMapperService
    ) {}


    data;
    selected;

    ngOnInit() {
        this.dataService.dataSource().subscribe(
            x => {
                if (Array.isArray(x)) {
                    this.data = x;
                } else {
                    let toBeChanged = this.data.find( item => item._id === x._id);
                    toBeChanged = x;
                }
            }
        );

    }

    themeColor(x) {
        return this.stateColorMapperService.themeColor(x);
    }

    select(x) {
        console.log(x);
        this.selected = x;
    }
    isNumber(x) {
        return Number.isSafeInteger(x);
    }
}
