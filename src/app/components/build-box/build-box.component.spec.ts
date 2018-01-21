import { TestBed, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { AppModule } from '../../app.module';
import { BuildBoxComponent } from './build-box.component';

describe('BuildBoxComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                BuildBoxComponent
            ],
        });
    }));

    it('should create the component', async(() => {
        const fixture = TestBed.createComponent(BuildBoxComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));

    fit(`should render if debug build failed`, async(() => {
        const fixture = TestBed.createComponent(BuildBoxComponent);
        fixture.componentInstance.build = {
            didDebugFailed: false,
            didReleaseFailed: false,
            date: '2014-12-20T01:52:46 -02:00',
        };
        fixture.detectChanges();

        // expect(fixture.debugElement.query(By.css('p.title'))).toBeTruthy();
        // expect(fixture.debugElement.query(By.css('.arrow-with-info.test.down'))).toBeTruthy();
        // expect(fixture.debugElement.query(By.css('.arrow-with-info.test.up'))).toBeFalsy();
        // expect(fixture.debugElement.query(By.css('.arrow-with-info.maintainability.up'))).toBeTruthy();
        // expect(fixture.debugElement.query(By.css('.arrow-with-info.security.right'))).toBeTruthy();
        // expect(fixture.debugElement.query(By.css('.arrow-with-info.workmanship.right'))).toBeTruthy();
        // expect(fixture.debugElement.query(By.css('.arrow-with-info.security.left'))).toBeFalsy();
        // expect(fixture.debugElement.query(By.css('.arrow-with-info.workmanship.left'))).toBeFalsy();
    }));



});
