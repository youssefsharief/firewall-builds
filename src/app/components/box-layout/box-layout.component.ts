import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-box-layout',
    templateUrl: 'box-layout.component.html',
    styleUrls: ['box-layout.component.scss']
})
export class BoxLayoutComponent {
    @Input() title: string;
    @Input() isFailing: boolean;

}
