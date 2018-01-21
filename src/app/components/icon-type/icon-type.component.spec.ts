import { TestBed, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { IconTypeComponent } from './icon-type.component';

describe('IconTypeComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                IconTypeComponent
            ],
        });
    }));

    it('should create the component', async(() => {
        const fixture = TestBed.createComponent(IconTypeComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));


});
