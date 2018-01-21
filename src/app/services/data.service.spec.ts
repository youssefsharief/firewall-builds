import { DataService } from './data.service';


describe('DataService', () => {


    it('should return data after subscribing to data source observable', (done) => {
        const service = new DataService();
        service.dataSource().subscribe((x) => {
            expect(x.length).toBeTruthy();
            done();
        });
    });


});
