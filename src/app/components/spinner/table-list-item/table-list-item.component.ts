import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-table-list-item',
    templateUrl: 'table-list-item.component.html',
    styleUrls: ['table-list-item.component.scss']
})
export class TableListItemComponent {
    @Input() selected;
    @Input() element;
}
