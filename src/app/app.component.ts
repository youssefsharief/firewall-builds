import { Component, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/concat';
import { DataService } from './services/data.service';


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


export class AppComponent  {


  

}




