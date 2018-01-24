import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { BuildBoxComponent } from './build-box.component';
import { AppModule } from '../../app.module';
import { BuildTypeComponent } from '../build-type/build-type.component';
import { BoxLayoutComponent } from '../box-layout/box-layout.component';

describe('BuildBoxComponent', () => {

    let fixture: ComponentFixture<BuildBoxComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                BuildBoxComponent,
                BuildTypeComponent,
                BoxLayoutComponent
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
        expect(fixture.nativeElement.querySelectorAll('app-build-type').length).toBe(2);
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
        expect(fixture.nativeElement.querySelectorAll('app-build-type').length).toBe(2);
    }));


});
