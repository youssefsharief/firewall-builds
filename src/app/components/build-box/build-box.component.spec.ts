import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { BuildBoxComponent } from './build-box.component';
import { AppModule } from '../../app.module';

describe('BuildBoxComponent', () => {

    let fixture: ComponentFixture<BuildBoxComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                AppModule
            ],
        });
        fixture = TestBed.createComponent(BuildBoxComponent);
    }));

    it('should create the component', async(() => {
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));

    it(`should render if no build failed`, async(() => {
        fixture.componentInstance.build = {
            didDebugFailed: false,
            didReleaseFailed: false,
            date: '2014-12-20T01:52:46 -02:00',
        };
        fixture.detectChanges();
        expect(fixture.nativeElement.querySelector('p.title')).toBeTruthy();
        expect(fixture.nativeElement.querySelector('.success')).toBeTruthy();
        expect(fixture.nativeElement.querySelector('.danger')).toBeFalsy();
        expect(fixture.nativeElement.querySelector('.pic-text-wrapper')).toBeTruthy();
    }));

    it(`should not grey out successfull builds`, async(() => {
        fixture.componentInstance.build = {
            didDebugFailed: false,
            didReleaseFailed: false,
            date: '2014-12-20T01:52:46 -02:00',
        };
        fixture.detectChanges();
        expect(fixture.nativeElement.querySelector('.grayscale')).toBeFalsy();
    }));


    it(`should render if all builds failed`, async(() => {
        fixture.componentInstance.build = {
            failed: true,
            didDebugFailed: true,
            didReleaseFailed: true,
            date: '2014-12-20T01:52:46 -02:00',
        };
        fixture.detectChanges();
        expect(fixture.nativeElement.querySelector('p.title')).toBeTruthy();
        expect(fixture.nativeElement.querySelector('.danger')).toBeTruthy();
        expect(fixture.nativeElement.querySelector('.success')).toBeFalsy();
        expect(fixture.nativeElement.querySelector('.pic-text-wrapper')).toBeTruthy();
    }));


    it(`should grey out failed build icon`, async(() => {
        fixture.componentInstance.build = {
            failed: true,
            didDebugFailed: false,
            didReleaseFailed: true,
            date: '2014-12-20T01:52:46 -02:00',
        };
        fixture.detectChanges();
        expect(fixture.nativeElement.querySelector('.danger')).toBeTruthy();
        expect(fixture.nativeElement.querySelector('.success')).toBeFalsy();
        expect(fixture.nativeElement.querySelector('.pic-text-wrapper')).toBeTruthy();
        expect(fixture.nativeElement.querySelector('.grayscale')).toBeTruthy();
    }));

    it(`should grey out both builds if both failed`, async(() => {
        fixture.componentInstance.build = {
            failed: true,
            didDebugFailed: true,
            didReleaseFailed: true,
            date: '2014-12-20T01:52:46 -02:00',
        };
        fixture.detectChanges();
        expect(fixture.nativeElement.querySelectorAll('.grayscale').length).toBe(2);
    }));

});
