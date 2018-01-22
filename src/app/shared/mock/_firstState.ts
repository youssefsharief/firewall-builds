import { Observable } from 'rxjs/Observable';

export const firstState = [
    {
        type: 'build',
        'name': 'adipisicing',
        'state': 'pending',
        '_id': '5a60aceb7c2ea1f5sd'
    },
    {
        type: 'firewall',
        'name': 'adipisicing',
        'state': 'pending',
        'owner': 'oooo',
        '_id': '5a60aceb7c2ea43d'
    },

    {
        type: 'firewall',
        timeStarted: Date.now().toString(),
        owner: 'Mcbride',
        'name': 'adipisicing',
        'state': 'running',
        'runningState': {
            phase: 'metrics',
            percentCompleted: 70
        },
        '_id': '5a60aceb7c2ea1f5gh'
    },

    {
        type: 'firewall',
        timeStarted: '2014-12-20T01:52:46 -02:00',
        owner: 'Mcbride',
        'name': 'adipisicing',
        'state': 'rejected',
        metrics: {
            test: {
                value: 77,
                isPositive: false,
            },
            maintainability: {
                value: 32,
                isPositive: true,
            },
            security: {
                value: 18,
                isPositive: true,
            },
            workmanship: {
                value: 45,
                isPositive: true,
            },
        },
        build: {
            didDebugFailed: false,
            didReleaseFailed: false,
            date: '2014-12-20T01:52:46 -02:00',
        },
        unitTests: {
            countPassed: 56,
            countFailed: 32,
            percentCovered: 73
        },
        functionalTests: {
            countPassed: 30,
            countFailed: 32,
            percentCovered: 89
        },
        '_id': '5a60aceb7c2ea1f5je'
    },

    {
        type: 'firewall',
        timeStarted: '2014-12-20T01:52:46 -02:00',
        owner: 'Youssef',
        'name': 'rtyjyh',
        'state': 'rejected',
        metrics: {
            test: {
                value: 77,
                isPositive: true,
            },
            maintainability: {
                value: 32,
                isPositive: true,
            },
            security: {
                value: 18,
                isPositive: true,
            },
            workmanship: {
                value: 45,
                isPositive: true,
            },
        },
        build: {
            didDebugFailed: true,
            didReleaseFailed: false,
            date: '2014-12-20T01:52:46 -02:00',
        },
        unitTests: {
            countPassed: 56,
            countFailed: 32,
            percentCovered: 73
        },
        functionalTests: {
            countPassed: 30,
            countFailed: 32,
            percentCovered: 89
        },
        '_id': '5a60aceb7c2sddwgrghtujwry'
    },

    {
        type: 'firewall',
        timeStarted: '2014-12-20T01:52:46 -02:00',
        owner: 'Youssef',
        'name': 'rtyjyh',
        'state': 'rejected',
        metrics: {
            test: {
                value: 77,
                isPositive: true,
            },
            maintainability: {
                value: 32,
                isPositive: true,
            },
            security: {
                value: 18,
                isPositive: true,
            },
            workmanship: {
                value: 45,
                isPositive: true,
            },
        },
        build: {
            didDebugFailed: false,
            didReleaseFailed: true,
            date: '2014-12-20T01:52:46 -02:00',
        },
        unitTests: {
            countPassed: 56,
            countFailed: 32,
            percentCovered: 73
        },
        functionalTests: {
            countPassed: 30,
            countFailed: 32,
            percentCovered: 89
        },
        '_id': 'fdgykulrkyo5968'
    },


    {
        type: 'build',
        timeStarted: '2014-12-20T01:52:46 -02:00',
        'name': 'rfgre',
        'state': 'complete',
        metrics: {
            test: {
                value: 80,
                isPositive: true,
            },
            maintainability: {
                value: 87,
                isPositive: true,
            },
            security: {
                value: 90,
                isPositive: false,
            },
            workmanship: {
                value: 97,
                isPositive: false,
            },
        },
        build: {
            didDebugFailed: false,
            didReleaseFailed: false,
            date: '2014-12-20T01:52:46 -02:00',
        },
        unitTests: {
            countPassed: 5000,
            countFailed: 1,
            percentCovered: 73
        },
        functionalTests: {
            countPassed: 30,
            countFailed: 32,
            percentCovered: 89
        },
        '_id': '5a60aceb7c2ea1f5d9o1f'
    },

    {
        type: 'firewall',
        timeStarted: '2014-12-20T01:52:46 -02:00',
        owner: 'Mcbride',
        'name': 'adipisicing',
        'state': 'rejected',
        metrics: {
            maintainability: {
                value: 5,
                isPositive: true,
            },
            security: {
                value: 31,
                isPositive: true,
            },
            workmanship: {
                value: 23,
                isPositive: true,
            },
        },
        build: {
            didDebugFailed: false,
            didReleaseFailed: false,
            date: '2014-12-20T01:52:46 -02:00',
        },
        '_id': '5a60aceb1f5d9be231j'
    },


    {
        type: 'firewall',
        timeStarted: '2014-12-20T01:52:46 -02:00',
        owner: 'ER',
        'name': 'rfgre',
        'state': 'accepted',
        metrics: {
            test: {
                value: 80,
                isPositive: true,
            },
            maintainability: {
                value: 87,
                isPositive: true,
            },
            security: {
                value: 90,
                isPositive: true,
            },
            workmanship: {
                value: 97,
                isPositive: true,
            },
        },
        build: {
            didDebugFailed: false,
            didReleaseFailed: false,
            date: '2014-12-20T01:52:46 -02:00',
        },
        unitTests: {
            countPassed: 560,
            countFailed: 32,
            percentCovered: 90
        },
        functionalTests: {
            countPassed: 540,
            countFailed: 43,
            percentCovered: 87
        },
        '_id': '5a60acb7c2ea1f5d9be231w'
    },

];


