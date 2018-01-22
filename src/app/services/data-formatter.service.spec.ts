import { DataFormatterService } from './data-formatter.service';


describe('DataFormatterService', () => {

    fit('should return data after subscribing to data source observable', () => {
        const service = new DataFormatterService();
        expect(service.formatData([{state: 'running'}])[0].state).toBe('Running');
    });


});
