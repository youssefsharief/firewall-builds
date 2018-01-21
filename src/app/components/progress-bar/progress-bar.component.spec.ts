import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { ProgressBarComponent } from './progress-bar.component';
import { By } from '@angular/platform-browser';

describe('ProgressBarComponent', () => {

    let fixture: ComponentFixture<ProgressBarComponent>;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                ProgressBarComponent
            ],
        });
        fixture = TestBed.createComponent(ProgressBarComponent);
    }));

    it('should create the component', async(() => {
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));

    it(`should have green progressBar if not failing`, async(() => {
        fixture.componentInstance.didFail = false;
        fixture.detectChanges();
        expect(fixture.nativeElement.querySelector('.success')).toBeTruthy();
    }));

    it(`should have red progressBar if failing`, async(() => {
        fixture.componentInstance.didFail = true;
        fixture.detectChanges();
        expect(fixture.nativeElement.querySelector('.danger')).toBeTruthy();
    }));



});
