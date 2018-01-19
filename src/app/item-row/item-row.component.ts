import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../shared/services/data.service';

@Component({
    // tslint:disable-next-line:component-selector
    selector: '[app-item-row]',
    templateUrl: 'item-row.component.html',
    styleUrls: ['item-row.component.scss']
})
export class ItemRowComponent {
      @Input() element;
}
