import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { StateColorMapperService } from '../../services/state-color-mapper.service';
import { ChartsBoxComponent } from './charts-box.component';
import { BoxLayoutComponent } from '../box-layout/box-layout.component';
import { PieChartComponent } from '../pie-chart/pie-chart.component';


describe('ChartsBoxComponent', () => {


    let fixture: ComponentFixture<ChartsBoxComponent>;
    let stateColorMapperService: StateColorMapperService;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                ChartsBoxComponent,
                BoxLayoutComponent,
                PieChartComponent
            ],
            providers: [
                { provide: StateColorMapperService, useValue: {} }
            ]
        });
        fixture = TestBed.createComponent(ChartsBoxComponent);
        stateColorMapperService = fixture.debugElement.injector.get(StateColorMapperService);
    }));



    it('should create the component', async(() => {
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));


    fit('should render coverage bar', async(() => {
        fixture.componentInstance.testsData = {
            failed: false,
            countPassed: 56,
            countFailed: 1,
            percentCovered: 73
        };
        fixture.detectChanges();
        expect(fixture.nativeElement.querySelector('div.colored-bar')).toBeTruthy();
    }));


    fit('should render passed tests', async(() => {
        fixture.componentInstance.testsData = {
            failed: false,
            countPassed: 56,
            countFailed: 1,
            percentCovered: 73
        };
        fixture.detectChanges();
        expect(fixture.nativeElement.querySelector('div.success')).toBeTruthy();
        expect(fixture.nativeElement.querySelector('div.danger')).toBeFalsy();
        expect(fixture.nativeElement.querySelector('div.text-success')).toBeTruthy();
    }));

    fit('should render failed tests', async(() => {
        fixture.componentInstance.testsData = {
            failed: true,
            countPassed: 5,
            countFailed: 100,
            percentCovered: 73
        };
        fixture.detectChanges();
        expect(fixture.nativeElement.querySelector('div.success')).toBeFalsy();
        expect(fixture.nativeElement.querySelector('div.danger')).toBeTruthy();
        expect(fixture.nativeElement.querySelector('div.text-success')).toBeFalsy();
    }));


});
