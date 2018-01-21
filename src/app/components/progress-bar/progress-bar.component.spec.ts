import { TestBed, async } from '@angular/core/testing';
import { ProgressBarComponent } from './progress-bar.component';
import { By } from '@angular/platform-browser';

describe('ProgressBarComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                ProgressBarComponent
            ],
        });
    }));

    it('should create the component', async(() => {
        const fixture = TestBed.createComponent(ProgressBarComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));

    it(`should have green progressBar if not failing`, async(() => {
        const fixture = TestBed.createComponent(ProgressBarComponent);
        fixture.componentInstance.didFail = false;
        fixture.detectChanges();
        expect(fixture.debugElement.query(By.css('.success'))).toBeTruthy();
    }));

    it(`should have red progressBar if failing`, async(() => {
        const fixture = TestBed.createComponent(ProgressBarComponent);
        fixture.componentInstance.didFail = true;
        fixture.detectChanges();
        expect(fixture.debugElement.query(By.css('.danger'))).toBeTruthy();
    }));



});
