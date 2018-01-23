import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { firstState } from '../shared/mock/_firstState';
import { firstChange, secondChange, thirdChange, fourthChange, fifthChange,
     sixthChange, eighthChange, seventhChange, ninthChange, tenthChange } from '../shared/mock/changes';

@Injectable()

export class DataService {

    dataSource() {
        return Observable.create(obs => {
            obs.next(firstState);
            setTimeout(() => obs.next(firstChange), 200);
            setTimeout(() => obs.next(secondChange), 600);
            setTimeout(() => obs.next(thirdChange), 1200);
            setTimeout(() => obs.next(fourthChange), 1600);
            setTimeout(() => obs.next(fifthChange), 2000);
            setTimeout(() => obs.next(sixthChange), 2700);
            setTimeout(() => obs.next(seventhChange), 3900);
            setTimeout(() => obs.next(eighthChange), 4200);
            setTimeout(() => obs.next(ninthChange), 4200);
            setTimeout(() => obs.next(tenthChange), 4200);
        });
    }








}


