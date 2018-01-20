import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-mertics-box',
    templateUrl: 'mertics-box.component.html',
    styleUrls: ['mertics-box.component.scss']
})
export class MerticsBoxComponent {
    @Input() metrics;

    ngOnInit() {
        console.log(this.metrics)
    }
}
