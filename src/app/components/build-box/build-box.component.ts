import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-build-box',
    templateUrl: 'build-box.component.html',
    styleUrls: ['build-box.component.scss']
})
export class BuildBoxComponent implements OnInit {
    @Input() build;
    public isFailing: boolean;

    ngOnInit() {
        this.isFailing = this.build.didDebugFailed || this.build.didReleaseFailed;
    }
}
