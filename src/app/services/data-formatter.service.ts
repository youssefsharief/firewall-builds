import { Injectable } from '@angular/core';

@Injectable()
export class DataFormatterService {

    public formatData(processes: any[]) {
        return processes.map(process => {
            process.state = this.capitalize(process.state);
            return process;
        });
    }


    private capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }



}




