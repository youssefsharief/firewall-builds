import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { IconTypeComponent } from './icon-type.component';
import { StateColorMapperService } from '../../services/state-color-mapper.service';


describe('IconTypeComponent', () => {


    let fixture: ComponentFixture<IconTypeComponent>;
    let stateColorMapperService: StateColorMapperService;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                IconTypeComponent
            ],
            providers: [
                { provide: StateColorMapperService, useValue: {} }
            ]
        });
        fixture = TestBed.createComponent(IconTypeComponent);
        stateColorMapperService = fixture.debugElement.injector.get(StateColorMapperService);
    }));



    it('should create the component', async(() => {
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));


    it('should render red firewall icon', async(() => {
        fixture.componentInstance.type = 'firewall';
        stateColorMapperService.themeColor = () => 'danger';
        fixture.detectChanges();
        expect(fixture.nativeElement.querySelector('img[src="assets/brickwall-danger.svg"]')).toBeTruthy();
        expect(fixture.nativeElement.querySelector('img[src="assets/brickwall-success.svg"]')).toBeFalsy();
        expect(fixture.nativeElement.querySelector('img[src="assets/pc-computer-with-monitor-danger.svg"]')).toBeFalsy();
        expect(fixture.nativeElement.querySelector('img[src="assets/pc-computer-with-monitor-danger.svg"]')).toBeFalsy();
    }));

    it('should render green firewall icon', async(() => {
        fixture.componentInstance.type = 'firewall';
        stateColorMapperService.themeColor = () => 'success';
        fixture.detectChanges();
        expect(fixture.nativeElement.querySelector('img[src="assets/brickwall-danger.svg"]')).toBeFalsy();
        expect(fixture.nativeElement.querySelector('img[src="assets/brickwall-success.svg"]')).toBeTruthy();
        expect(fixture.nativeElement.querySelector('img[src="assets/pc-computer-with-monitor-danger.svg"]')).toBeFalsy();
        expect(fixture.nativeElement.querySelector('img[src="assets/pc-computer-with-monitor-danger.svg"]')).toBeFalsy();
    }));


    it('should render red build icon', async(() => {
        fixture.componentInstance.type = 'build';
        stateColorMapperService.themeColor = () => 'danger';
        fixture.detectChanges();
        expect(fixture.nativeElement.querySelector('img[src="assets/pc-computer-with-monitor-success.svg"]')).toBeFalsy();
        expect(fixture.nativeElement.querySelector('img[src="assets/brickwall-success.svg"]')).toBeFalsy();
        expect(fixture.nativeElement.querySelector('img[src="assets/pc-computer-with-monitor-danger.svg"]')).toBeTruthy();
    }));

    it('should render green build icon', async(() => {
        fixture.componentInstance.type = 'build';
        stateColorMapperService.themeColor = () => 'success';
        fixture.detectChanges();
        expect(fixture.nativeElement.querySelector('img[src="assets/pc-computer-with-monitor-danger.svg"]')).toBeFalsy();
        expect(fixture.nativeElement.querySelector('img[src="assets/brickwall-success.svg"]')).toBeFalsy();
        expect(fixture.nativeElement.querySelector('img[src="assets/pc-computer-with-monitor-danger.svg"]')).toBeFalsy();
        expect(fixture.nativeElement.querySelector('img[src="assets/pc-computer-with-monitor-success.svg"]')).toBeTruthy();
    }));

});
