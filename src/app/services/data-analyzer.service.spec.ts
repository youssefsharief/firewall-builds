import { DataAnalyzerService } from './data-analyzer.service';
import { firstState } from '../shared/mock/_firstState';


describe('DataAnalyzerService', () => {

    const service = new DataAnalyzerService();
    const result = service.analyzeData(firstState);

    fit('should return array of same length', () => {
        expect(result.length).toBe(firstState.length);
    });

    fit('should set pending state if no metrics where examined', () => {
        expect(result[0].state).toBe('pending');
    });

    fit('should set running state if metrics are not complete', () => {
        expect(result[2].state).toBe('running');
    });

    fit('should set rejected state if metrics are failing', () => {
        expect(result[3].state).toBe('rejected');
        expect(result[3].metrics.failed).toBe(true);
    });


    fit('should set rejected state if build is failing', () => {
        expect(result[4].state).toBe('rejected');
        expect(result[4].build.failed).toBe(true);
    });







});
