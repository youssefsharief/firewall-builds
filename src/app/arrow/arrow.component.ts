import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-arrow',
    templateUrl: 'arrow.component.html',
    styleUrls: ['arrow.component.scss']
})
export class ArrowComponent {
    @Input() text: string;
    // @Input() value: string;
    @Input() direction: string;
    @Input() color: string;

}
