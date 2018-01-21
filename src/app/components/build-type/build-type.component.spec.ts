import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { AppModule } from '../../app.module';
import { BuildTypeComponent } from './build-type.component';

describe('BuildTypeComponent', () => {

    let fixture: ComponentFixture<BuildTypeComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                BuildTypeComponent
            ],
        });
        fixture = TestBed.createComponent(BuildTypeComponent);
    }));

    it('should create the component', async(() => {
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));

    it(`should render regular pc icon if not failed`, async(() => {
        fixture.componentInstance.failed = false;
        fixture.detectChanges();
        expect(fixture.nativeElement.querySelector('.grayscale')).toBeFalsy();

    }));

    it(`should render greyed out pc icon if failed`, async(() => {
        fixture.componentInstance.failed = true;
        fixture.detectChanges();
        expect(fixture.nativeElement.querySelector('.grayscale')).toBeTruthy();
    }));

});
