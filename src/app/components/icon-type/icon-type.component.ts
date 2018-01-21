import { Component, Input, OnInit } from '@angular/core';
import { StateColorMapperService } from '../../services/state-color-mapper.service';

@Component({
    selector: 'app-icon-type',
    templateUrl: 'icon-type.component.html',
    styleUrls: ['icon-type.component.scss']
})
export class IconTypeComponent implements OnInit {
    @Input() type: string;
    @Input() status: string;
    public themeColor: string;

    constructor(
        private stateColorMapperService: StateColorMapperService
    ) {}

    ngOnInit() {
        this.themeColor = this.stateColorMapperService.themeColor(this.status);
    }
}
