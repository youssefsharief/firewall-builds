import { Component, Input } from '@angular/core';
import { StateColorMapperService } from '../shared/services/state-color-mapper.service';

@Component({
    selector: 'app-icon-type',
    templateUrl: 'icon-type.component.html',
    styleUrls: ['icon-type.component.scss']
})
export class IconTypeComponent {
    @Input() type: string;
    @Input() status: string;

    constructor(
        private stateColorMapperService: StateColorMapperService
    ) {}
    themeColor() {
        return this.stateColorMapperService.themeColor(this.status);
    }
}
