import { Component, Input } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/core';

@Component({
    selector: 'app-extended-table-list-item',
    templateUrl: 'extended-table-list-item.component.html',
    styleUrls: ['extended-table-list-item.component.scss'],
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
export class ExtendedTableListItemComponent {
    @Input() element;
}
