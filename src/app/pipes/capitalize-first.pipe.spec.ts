import { TestBed, async } from '@angular/core/testing';
import { CapitalizeFirstPipe } from './capitalize-first.pipe';



describe('CapitalizeFirstPipe', () => {




    it('should capitalize first letter in "state" property ', () => {
        const pipe = new CapitalizeFirstPipe();
        expect(pipe.transform('running' , [])).toBe('Running');
    });


});
