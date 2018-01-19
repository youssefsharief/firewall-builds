import { Injectable } from '@angular/core';

@Injectable()

export class StateColorMapperService {


    themeColor(x) {
        switch (x) {
            case 'running': return 'primary';
            case 'complete': return 'success';
            case 'accepted': return 'success';
            case 'rejected': return 'danger';
            case 'pending': return 'grey';
        }
    }








}




