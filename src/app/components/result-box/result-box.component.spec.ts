import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { AppModule } from '../../app.module';
import { ResultBoxComponent } from './result-box.component';

fdescribe('ResultBoxComponent', () => {

    let fixture: ComponentFixture<ResultBoxComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                ResultBoxComponent
            ],
        });
        fixture = TestBed.createComponent(ResultBoxComponent);
    }));

    it('should create the component', async(() => {
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));

    it(`should should show rejection in metrics reduction`, async(() => {
        fixture.componentInstance.process = {
            state: 'rejected',
            metrics: {  failed: true    },
            build: {  failed: true    },
            unitTests: {  failed: true    },
            functionalTests: {  failed: true    }
        };
        fixture.detectChanges();
        expect(fixture.nativeElement.querySelector('.danger')).toBeTruthy();
    }));

    it(`should should show rejection in build`, async(() => {
        fixture.componentInstance.process = {
            state: 'rejected',
            metrics: {  failed: false    },
            build: {  failed: true    },
            unitTests: {  failed: true    },
            functionalTests: {  failed: true    }
        };
        fixture.detectChanges();
        expect(fixture.nativeElement.querySelector('.danger')).toBeTruthy();
    }));


    it(`should should show rejection in unit tests`, async(() => {
        fixture.componentInstance.process = {
            state: 'rejected',
            metrics: {  failed: false    },
            build: {  failed: false    },
            unitTests: {  failed: true    },
            functionalTests: {  failed: true    }
        };
        fixture.detectChanges();
        expect(fixture.nativeElement.querySelector('.danger')).toBeTruthy();
    }));

    fit(`should should show rejection in functional tests`, async(() => {
        fixture.componentInstance.process = {
            state: 'rejected',
            metrics: {  failed: false    },
            build: {  failed: false    },
            unitTests: {  failed: false    },
            functionalTests: {  failed: true    }
        };
        fixture.detectChanges();
        expect(fixture.nativeElement.querySelector('.danger')).toBeTruthy();
    }));

    fit(`should should acceptance for complete status`, async(() => {
        fixture.componentInstance.process = {
            state: 'complete',
            metrics: {  failed: false    },
            build: {  failed: false    },
            unitTests: {  failed: false    },
            functionalTests: {  failed: false    }
        };
        fixture.detectChanges();
        expect(fixture.nativeElement.querySelector('.yellow')).toBeTruthy();
    }));

});
