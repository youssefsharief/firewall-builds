import { Injectable } from '@angular/core';

@Injectable()
export class DataAnalyzerService {

    public analyzeData(processes) {
        return processes.map(process => {
            if (process.metrics) {
                process.metrics = this.checkIfMetricsFailed(process.metrics);
            }
            if (process.build) {
                process.build = this.checkIfBuildFailed(process.build);
            }
            if (process.unitTests) {
                process.unitTests = this.checkIfTestsFailed(process.unitTests);
            }
            if (process.functionalTests) {
                process.functionalTests = this.checkIfTestsFailed(process.functionalTests);
            }
            return process;
        });
    }


    private checkIfMetricsFailed(metrics) {
        Object.keys(metrics).forEach(metric => {
            if (!metrics[metric].isPositive) {
                metrics.failed = true;
                return metrics;
            }
        });
    }

    private checkIfBuildFailed(build) {
        if (build.didDebugFailed || build.didReleaseFailed) {
             build.failed = true;
             return build;
        }
    }

    private checkIfTestsFailed(testsData) {
        const passedPercent = Math.round(testsData.countPassed /
            (testsData.countPassed + testsData.countFailed) * 100);
        if (passedPercent < 50) {
            testsData.failed = true;
            return testsData;
        }
    }



}




