import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-build-box',
    templateUrl: 'build-box.component.html',
    styleUrls: ['build-box.component.scss']
})
export class BuildBoxComponent {
    @Input() date: string;
}
