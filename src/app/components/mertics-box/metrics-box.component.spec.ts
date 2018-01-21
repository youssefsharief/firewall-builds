import { TestBed, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { MerticsBoxComponent } from './mertics-box.component';
import { AppModule } from '../../app.module';

describe('MerticsBoxComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                AppModule
            ],
        });
    }));

    it('should create the component', async(() => {
        const fixture = TestBed.createComponent(MerticsBoxComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));

    it(`should render down arrow if tests is not positive`, async(() => {
        const fixture = TestBed.createComponent(MerticsBoxComponent);
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

        expect(fixture.debugElement.query(By.css('p.title'))).toBeTruthy();
        expect(fixture.debugElement.query(By.css('.arrow-with-info.test.down'))).toBeTruthy();
        expect(fixture.debugElement.query(By.css('.arrow-with-info.test.up'))).toBeFalsy();
        expect(fixture.debugElement.query(By.css('.arrow-with-info.maintainability.up'))).toBeTruthy();
        expect(fixture.debugElement.query(By.css('.arrow-with-info.security.right'))).toBeTruthy();
        expect(fixture.debugElement.query(By.css('.arrow-with-info.workmanship.right'))).toBeTruthy();
        expect(fixture.debugElement.query(By.css('.arrow-with-info.security.left'))).toBeFalsy();
        expect(fixture.debugElement.query(By.css('.arrow-with-info.workmanship.left'))).toBeFalsy();
    }));


    fit(`should render left sarrow if security is not positive`, async(() => {
        const fixture = TestBed.createComponent(MerticsBoxComponent);
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
                isPositive: false,
            },
        };
        fixture.detectChanges();

        expect(fixture.debugElement.query(By.css('p.title'))).toBeTruthy();
        expect(fixture.debugElement.query(By.css('.arrow-with-info.test.up'))).toBeTruthy();
        expect(fixture.debugElement.query(By.css('.arrow-with-info.test.down'))).toBeFalsy();
        expect(fixture.debugElement.query(By.css('.arrow-with-info.maintainability.up'))).toBeTruthy();
        expect(fixture.debugElement.query(By.css('.arrow-with-info.security.right'))).toBeTruthy();
        expect(fixture.debugElement.query(By.css('.arrow-with-info.workmanship.right'))).toBeFalsy();
        expect(fixture.debugElement.query(By.css('.arrow-with-info.security.left'))).toBeTruthy();
        expect(fixture.debugElement.query(By.css('.arrow-with-info.workmanship.left'))).toBeFalsy();
    }));


});
