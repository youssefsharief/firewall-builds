import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { MerticsBoxComponent } from './mertics-box.component';
import { AppModule } from '../../app.module';

describe('MerticsBoxComponent', () => {

    let fixture: ComponentFixture<MerticsBoxComponent>;
    
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                AppModule
            ],
        });
        fixture = TestBed.createComponent(MerticsBoxComponent);
    }));

    it('should create the component', async(() => {
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));

    it(`should render down arrow if tests is not positive`, async(() => {
        fixture.componentInstance.metrics = {
            failed: true,
            test: {
                value: 77,
                isPositive: false,
            },
            maintainability: {
                value: 32,
                isPositive: true,
            },
            security: {
                value: 18,
                isPositive: true,
            },
            workmanship: {
                value: 45,
                isPositive: true,
            },
        };
        fixture.detectChanges();

        expect(fixture.nativeElement.querySelector('p.title')).toBeTruthy();
        expect(fixture.nativeElement.querySelector('.arrow-with-info.test.down')).toBeTruthy();
        expect(fixture.nativeElement.querySelector('.arrow-with-info.test.up')).toBeFalsy();
        expect(fixture.nativeElement.querySelector('.arrow-with-info.maintainability.up')).toBeTruthy();
        expect(fixture.nativeElement.querySelector('.arrow-with-info.security.right')).toBeTruthy();
        expect(fixture.nativeElement.querySelector('.arrow-with-info.workmanship.right')).toBeTruthy();
        expect(fixture.nativeElement.querySelector('.arrow-with-info.security.left')).toBeFalsy();
        expect(fixture.nativeElement.querySelector('.arrow-with-info.workmanship.left')).toBeFalsy();
    }));


    it(`should render left arrow if security is not positive`, async(() => {
        fixture.componentInstance.metrics = {
            failed: true,
            test: {
                value: 77,
                isPositive: true,
            },
            maintainability: {
                value: 32,
                isPositive: true,
            },
            security: {
                value: 18,
                isPositive: true,
            },
            workmanship: {
                value: 45,
                isPositive: false,
            },
        };
        fixture.detectChanges();

        expect(fixture.nativeElement.querySelector('.arrow-with-info.security.left')).toBeFalsy();
        expect(fixture.nativeElement.querySelector('.arrow-with-info.workmanship.left')).toBeTruthy();
    }));


});
