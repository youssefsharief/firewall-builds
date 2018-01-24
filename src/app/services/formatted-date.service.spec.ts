import { FormattedDateService } from './formatted-date.service';



describe('FormattedDateService', () => {

    it('should return date', () => {
        const service = new FormattedDateService();
        expect(service.getDateThenTimeSpaced()).toBeTruthy();
        expect(service.getTimeThenDashThenDate()).toBeTruthy();

    });


});
