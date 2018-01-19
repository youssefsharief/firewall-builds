import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { firstState } from '../mock.ts/_firstState';
import { firstChange, secondChange, thirdChange } from '../mock.ts/changes';

@Injectable()

export class DataService {

    dataSource() {
        return Observable.create(obs => {
            obs.next(firstState);
            setTimeout(() => obs.next(firstChange), 200);
            setTimeout(() => obs.next(secondChange), 600);
            setTimeout(() => obs.next(thirdChange), 1200);
        });
    }








}

