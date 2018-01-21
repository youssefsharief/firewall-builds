import { Component, Input } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'app-build-type',
    templateUrl: 'build-type.component.html',
    styleUrls: ['build-type.component.scss']
})
export class BuildTypeComponent {
    @Input() type: string;
    @Input() failed: boolean;
}
