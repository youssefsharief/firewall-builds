import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import * as moment from 'moment-mini';
import * as faker from 'faker';



@Injectable()

export class FormattedDateService {

    getDateThenTimeSpaced() {
        return moment(faker.date.recent(1)).format('M/D/YYYY      \xa0\xa0\xa0  h:mma');
    }
    getTimeThenDashThenDate() {
        return moment(faker.date.recent(1)).format('h:mma - M/D/YYYY');
    }









}


