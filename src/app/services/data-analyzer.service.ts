import { Injectable } from '@angular/core';

@Injectable()

export class DataAnalyzerService {


    public analyzeData(processes) {
        processes.forEach(process => {
            if (process.metrics) {
                this.checkIfMetricsFailed(process);
            }
            if (process.build) {
                this.checkIfBuildFailed(process);
            }
            if (process.unitTests) {
                this.checkIfTestsFailed(process.unitTests);
            }
            if (process.functionalTests) {
                this.checkIfTestsFailed(process.functionalTests);
            }
            return processes;
        });
    }


    private checkIfMetricsFailed(process) {
        Object.keys(process.metrics).forEach(metric => {
            if (!process.metrics[metric].isPositive) {
                return process.metrics.failed = true;
            }
        });
    }

    private checkIfBuildFailed(process) {
        if (process.build.didDebugFailed || process.build.didReleaseFailed) {
            return process.build.failed = true;
        }
    }

    private checkIfTestsFailed(testsData) {
        const passedPercent = Math.round(testsData.countPassed /
            (testsData.countPassed + testsData.countFailed) * 100);
        if (passedPercent < 50) {
            return testsData.failed = true;
        }
    }



}




