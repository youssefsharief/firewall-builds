import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { StateColorMapperService } from '../../services/state-color-mapper.service';
import { BoxLayoutComponent } from '../box-layout/box-layout.component';
import { PieChartComponent } from '../pie-chart/pie-chart.component';


describe('PieChartComponent', () => {


    let fixture: ComponentFixture<PieChartComponent>;
    let stateColorMapperService: StateColorMapperService;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                PieChartComponent,
                BoxLayoutComponent,
                PieChartComponent
            ],
            providers: [
                { provide: StateColorMapperService, useValue: {} }
            ]
        });
        fixture = TestBed.createComponent(PieChartComponent);
        stateColorMapperService = fixture.debugElement.injector.get(StateColorMapperService);
    }));



    it('should create the component', async(() => {
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));


    it('should render canvas', async(() => {
        fixture.componentInstance.countFailed = 5;
        fixture.componentInstance.countPassed = 50;
        fixture.detectChanges();
        expect(fixture.nativeElement.querySelector('canvas')).toBeTruthy();
    }));



  

});
