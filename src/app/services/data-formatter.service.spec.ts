import { DataFormatterService } from './data-formatter.service';


describe('DataFormatterService', () => {

    it('should capitalize first letter in "state" property ', () => {
        const service = new DataFormatterService();
        expect(service.formatData([{ state: 'running' }])[0].state).toBe('Running');
    });

    it('should not mess with other data', () => {
        const service = new DataFormatterService();
        const result = service.formatData([{ state: 'running', otherData: 're' }, { state: 'accepted', imp: 'ww' }]);
        expect(result[0].otherData).toBe('re');
        expect(result[1].imp).toBe('ww');
    });


});
