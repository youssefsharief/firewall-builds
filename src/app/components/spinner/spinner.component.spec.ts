import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { SpinnerComponent } from './spinner.component';


describe('SpinnerComponent', () => {


    let fixture: ComponentFixture<SpinnerComponent>;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                SpinnerComponent
            ],
        });
        fixture = TestBed.createComponent(SpinnerComponent);
    }));



    fit('should create the component', async(() => {
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));

   

});
