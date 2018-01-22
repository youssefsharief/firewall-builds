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

    it(`should have gray bar if pending`, async(() => {
        fixture.componentInstance.data = null;
        fixture.detectChanges();
        expect(fixture.nativeElement.querySelector('.progress-bar.gray')).toBeTruthy();
    }));

    it(`should have red bar if failed`, async(() => {
        fixture.componentInstance.data = { failed: true };
        fixture.detectChanges();
        expect(fixture.nativeElement.querySelector('.progress-bar.danger')).toBeTruthy();
    }));

    it(`should have green bar if succeeded`, async(() => {
        fixture.componentInstance.data = { anyData: 'exists' };
        fixture.detectChanges();
        expect(fixture.nativeElement.querySelector('.progress-bar.success')).toBeTruthy();
    }));

    it(`should have blue bar if still running`, async(() => {
        fixture.componentInstance.data = { percentCompleted: 70 };
        fixture.detectChanges();
        expect(fixture.nativeElement.querySelector('.progress-bar.primary')).toBeTruthy();
    }));

    it(`should show bar width corresponding to the percentage completed`, async(() => {
        fixture.componentInstance.data = { percentCompleted: 70 };
        fixture.detectChanges();
        expect(fixture.nativeElement.querySelector('.progress-bar.primary')).toBeTruthy();
        expect(fixture.nativeElement.querySelector('.progress-bar.primary').style.width).toBe('70%');
    }));



});
