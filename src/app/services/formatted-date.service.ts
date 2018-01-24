import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import * as moment from 'moment';
import * as faker from 'faker';



@Injectable()

export class FormattedDateService {

    getDateThenTimeSpaced() {
        return moment(faker.date.recent(1)).format('M/D/YYYY      \xa0\xa0\xa0  hh:mma');
    }
    getTimeThenDashThenDate() {
        return moment(faker.date.recent(1)).format('hh:mma - M/D/YYYY');
    }









}


