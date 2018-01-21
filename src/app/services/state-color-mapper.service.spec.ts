import { StateColorMapperService } from './state-color-mapper.service';


describe('DataService', () => {


    it('should return success for "complete" state ', () => {
        const service = new StateColorMapperService();
        expect(service.themeColor('complete')).toBe('success');
    });

    it('should return success for "accepted" state ', () => {
        const service = new StateColorMapperService();
        expect(service.themeColor('accepted')).toBe('success');
    });


    it('should return danger for "rejected" state ', () => {
        const service = new StateColorMapperService();
        expect(service.themeColor('rejected')).toBe('danger');
    });


    it('should return grey for "pending" state ', () => {
        const service = new StateColorMapperService();
        expect(service.themeColor('pending')).toBe('grey');
    });

    it('should return primary for "running" state ', () => {
        const service = new StateColorMapperService();
        expect(service.themeColor('running')).toBe('primary');
    });

});
