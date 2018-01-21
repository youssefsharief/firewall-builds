import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { AppModule } from '../../app.module';
import { BoxLayoutComponent } from './box-layout.component';

describe('BoxLayoutComponent', () => {

    let fixture: ComponentFixture<BoxLayoutComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                AppModule
            ],
        });
        fixture = TestBed.createComponent(BoxLayoutComponent);
    }));

    it('should create the component', async(() => {
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));

    it(`should render green box if successful`, async(() => {
        fixture.componentInstance.isFailing = false;
        fixture.detectChanges();
        expect(fixture.nativeElement.querySelector('.success')).toBeTruthy();
        expect(fixture.nativeElement.querySelector('.danger')).toBeFalsy();
    }));


    it(`should render red box if failing`, async(() => {
        fixture.componentInstance.isFailing = true;
        fixture.detectChanges();
        expect(fixture.nativeElement.querySelector('.danger')).toBeTruthy();
        expect(fixture.nativeElement.querySelector('.success')).toBeFalsy();
    }));

});
