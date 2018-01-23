import { Injectable } from '@angular/core';

@Injectable()
export class DataAnalyzerService {

    public analyzeData(processes) {
        return processes.map(process => {

            if (!process.metrics && !process.build && !process.unitTests && !process.functionalTests) {
                process.state = process.isRunning ? 'running' : 'pending';
                return process;
            }
            if (!process.metrics) {
                process.state = process.isRunning ? 'running' : 'rejected';
                return process;
            }else {
                process.metrics = this.checkIfMetricsFailed(process.metrics);
            }

            if (!process.build) {
                process.state = process.isRunning ? 'running' : 'rejected';
                return process;
            }else {
                process.build = this.checkIfBuildFailed(process.build);
            }

            if (!process.unitTests) {
                process.state = process.isRunning ? 'running' : 'rejected';
                return process;
            } else {
                process.unitTests = this.checkIfTestsFailed(process.unitTests);
            }

            if (!process.functionalTests) {
                process.state = process.isRunning ? 'running' : 'rejected';
                return process;
            } else {
                process.functionalTests = this.checkIfTestsFailed(process.functionalTests);
            }
            if (process.metrics.failed || process.build.failed || process.unitTests.failed || process.functionalTests.failed) {
                process.state = 'rejected';
            } else {
                process.state = process.type === 'firewall' ? 'accepted' : 'complete';
            }
            return process;
        });
    }


    private checkIfMetricsFailed(metrics) {
        Object.keys(metrics).forEach(metric => {
            if (metrics[metric].isPositive === false) {
                metrics.failed = true;
                return metrics;
            }
        });
        return metrics;
    }

    private checkIfBuildFailed(build) {
        if (build.didDebugFailed || build.didReleaseFailed) {
            build.failed = true;
            return build;
        }
        return build;
    }

    private checkIfTestsFailed(testsData) {
        const passedPercent = Math.round(testsData.countPassed /
            (testsData.countPassed + testsData.countFailed) * 100);
        if (passedPercent < 50) {
            testsData.failed = true;
            return testsData;
        }
        return testsData;
    }



}




