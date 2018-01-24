import { DataAnalyzerService } from './data-analyzer.service';
import { firstState } from '../shared/mock/_firstState';


describe('DataAnalyzerService', () => {

    const service = new DataAnalyzerService();
    const result = service.analyzeData(firstState);

    it('should return array of same length', () => {
        expect(result.length).toBe(firstState.length);
    });

    it('should set pending state if no metrics where examined', () => {
        expect(result[0].state).toBe('pending');
    });

    it('should set running state if metrics are not complete', () => {
        expect(result[2].state).toBe('running');
    });

    it('should set rejected state if metrics are failing', () => {
        expect(result[4].state).toBe('rejected');
        expect(result[4].metrics.failed).toBe(true);
    });


    it('should set rejected state if build is failing', () => {
        expect(result[5].state).toBe('rejected');
        expect(result[5].build.failed).toBe(true);
    });







});
