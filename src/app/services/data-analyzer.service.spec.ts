import { DataAnalyzerService } from './data-analyzer.service';
import { firstState } from '../shared/mock/_firstState';


describe('DataAnalyzerService', () => {


    it('should return alayzed data corectlty', () => {
        const service = new DataAnalyzerService();
        expect(service.analyzeData(firstState).length).toBeTruthy();
        expect(service.analyzeData(firstState)[3].metrics.failed).toBeTruthy();
        expect(service.analyzeData(firstState)[3].build.failed).toBeFalsy();
        expect(service.analyzeData(firstState)[3].unitTests.failed).toBeFalsy();
        expect(service.analyzeData(firstState)[3].functionalTests.failed).toBeTruthy();

    });








});
