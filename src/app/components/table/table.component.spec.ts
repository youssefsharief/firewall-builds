import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { StateColorMapperService } from '../../services/state-color-mapper.service';
import { TableComponent } from './table.component';
import { AppModule } from '../../app.module';
import { DataAnalyzerService } from '../../services/data-analyzer.service';
import { DataService } from '../../services/data.service';


describe('TableComponent', () => {


    let fixture: ComponentFixture<TableComponent>;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                AppModule
            ],
        });
        fixture = TestBed.createComponent(TableComponent);
    }));



    it('should create the component', async(() => {
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));

    describe('Cursor style', () => {
        it('list item should not have cursor style if in pending state', async(() => {
            expect(fixture.componentInstance.cursorStyle({ state: 'pending' })).toBeFalsy();
        }));

        it('list item should have cursor style if not opened', async(() => {
            expect(fixture.componentInstance.cursorStyle({ state: 'any other state' }).cursor).toBe('pointer');
        }));
    });

    describe('isOpened method', () => {
        it('should work ', async(() => {
            expect(fixture.componentInstance.isOpened({ _id: '1' })).toBeFalsy();
            fixture.componentInstance.selected = { _id: '1' }
            expect(fixture.componentInstance.isOpened({ _id: '1' })).toBe(true);
            expect(fixture.componentInstance.isOpened({ _id: '2' })).toBeFalsy();
        }));
    });

    describe('theme color method', () => {
        it('should work ', async(() => {
            expect(fixture.componentInstance.themeColor('accepted')).toBe('success');
            expect(fixture.componentInstance.isOpened({ _id: '2' })).toBeFalsy();
        }));
    });

    describe('select method', () => {
        it('should work ', async(() => {
            fixture.componentInstance.select(5);
            expect(fixture.componentInstance.selected).toBe(5);
        }));
    });



    // it('should render canvas', async(() => {
    //     fixture.componentInstance.countFailed = 5;
    //     fixture.componentInstance.countPassed = 50;
    //     fixture.detectChanges();
    //     expect(fixture.nativeElement.querySelector('canvas')).toBeTruthy();
    // }));


});
