import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    animations: [
        trigger('detailExpand', [
            state('collapsed', style({ height: '0px', minHeight: '0', visibility: 'hidden' })),
            state('expanded', style({ height: '*', visibility: 'visible' })),
            transition('expanded <=> collapsed', animate('700ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
        ]),
    ],
    styleUrls: ['./app.component.scss']
})


export class AppComponent implements OnInit {



    displayedColumns = ['type', 'timeStarted', 'owner', 'name', 'state', 'metrics', 'build', 'unitTest', 'functionalTest', '_id'];
    dataSource;


    ngOnInit() {
        this.dataSource = new MatTableDataSource();
        const rows = [];
        payload.forEach(element => rows.push(element, { detailRow: true, element }));
        this.dataSource.data = rows;
    }

    isNumber(x) {
        return Number.isSafeInteger(x);
    }

    isExpansionDetailRow = (_, row: any) => {
        const x = row.hasOwnProperty('detailRow');
        return x;
    }
}



export const payload = [
    {
        'type': 'firewall',
        'timeStarted': '2014-12-20T01:52:46 -02:00',
        'owner': 'Mcbride',
        'name': 'adipisicing',
        'state': 'pending',
        'metrics': 0,
        'build': true,
        'unitTest': true,
        'functionalTest': true,
        '_id': '5a60aceb7c2ea1f5d9be231a'
    },
    {
        'type': 'firewall',
        'timeStarted': '2016-04-06T03:14:24 -02:00',
        'owner': 'Alisa',
        'name': 'estaaaaaaaaaaaaaaaa',
        'state': 'running',
        'metrics': 49,
        '_id': '5a60acebd428d4f8dfb69574'
    },
    {
        'type': 'firewall',
        'timeStarted': '2016-03-30T07:54:54 -02:00',
        'owner': 'Jaime',
        'name': 'laborum',
        'state': 'rejected',
        'metrics': false,
        'build': true,
        'unitTest': true,
        'functionalTest': true,
        '_id': '5a60acebdc431b50c0cf3b87'
    },
    {
        'type': 'firewall',
        'timeStarted': '2016-03-30T07:54:54 -02:00',
        'owner': 'Jaime',
        'name': 'laborum',
        'state': 'rejected',
        'metrics': false,
        '_id': '5a60acebdc431b50c0cf3b87'
    },

    {
        'type': 'build',
        'timeStarted': '2015-05-15T03:25:53 -02:00',
        'owner': 'Colon',
        'name': 'qui',
        'state': 'complete',
        'metrics': true,
        'build': true,
        'unitTest': true,
        'functionalTest': true,
        '_id': '5a60aceb3ccbbb8145b0000d'
    },
    {
        'type': 'firewall',
        'timeStarted': '2016-10-15T07:12:59 -02:00',
        'owner': 'Laurel',
        'name': 'labore',
        'state': 'accepted',
        'metrics': true,
        'build': true,
        'unitTest': true,
        'functionalTest': true,
        '_id': '5a60aceb5a6851d5b242eded'
    },
    {
        'type': 'firewall',
        'timeStarted': '2015-04-24T12:51:27 -02:00',
        'owner': 'Baxter',
        'name': 'ipsum',
        'state': 'pending',
        'metrics': 0,
        'build': true,
        'unitTest': true,
        'functionalTest': true,
        '_id': '5a60acebb050506802781886'
    },
    {
        'type': 'build',
        'timeStarted': '2017-07-15T08:31:57 -02:00',
        'owner': 'Reeves',
        'name': 'enim',
        'state': 'fail',
        'metrics': false,
        'build': true,
        'unitTest': true,
        'functionalTest': true,
        '_id': '5a60acebcdce4ab443887f5e'
    }
];

