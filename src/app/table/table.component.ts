import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/services/data.service';

@Component({
    selector: 'app-table',
    templateUrl: 'table.component.html',
    styleUrls: ['table.component.scss']
})


export class TableComponent implements OnInit {
    constructor(
        private dataService: DataService
    ) {}


    data;


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

    isNumber(x) {
        return Number.isSafeInteger(x);
    }
}
