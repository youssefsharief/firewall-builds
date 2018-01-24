import { Observable } from 'rxjs/Observable';
import { FormattedDateService } from '../../services/formatted-date.service';

const formattedDateService = new FormattedDateService();
export const firstState = [
    {
        type: 'build',
        name: 'Tenrox-R3_1473',
        '_id': '5a60aceb7c2ea1f5sd'
    },
    {
        type: 'firewall',
        name: 'adipisicing',
        'owner': 'oooo',
        '_id': '5a60aceb7c2ea43d'
    },

    {
        type: 'firewall',
        timeStarted: formattedDateService.getDateThenTimeSpaced(),
        owner: 'Mcbride',
        name: 'a',
        isRunning: true,
        phase: 'metrics',
        percentCompleted: 70,
        '_id': '5a60aceb7c2ea1f5gh'
    },

    {
        type: 'firewall',
        timeStarted: formattedDateService.getDateThenTimeSpaced(),
        owner: 'Mcbride',
        name: 'b',
        isRunning: true,
        phase: 'metrics',
        percentCompleted: 40,
        '_id': 'gfffferlewtik94568'
    },

    {
        type: 'firewall',
        timeStarted: formattedDateService.getDateThenTimeSpaced(),
        owner: 'c',
        name: 'adipisicing',
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
            date: formattedDateService.getTimeThenDashThenDate(),
        },
        unitTests: {
            countPassed: 56,
            countFailed: 32,
            percentCovered: 73
        },
        functionalTests: {
            countPassed: 70,
            countFailed: 32,
            percentCovered: 89
        },
        '_id': '5a60aceb7c2ea1f5je'
    },

    {
        type: 'firewall',
        timeStarted: formattedDateService.getDateThenTimeSpaced(),
        owner: 'Youssef',
        name: 'd',
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
            date: formattedDateService.getTimeThenDashThenDate(),
        },
        unitTests: {
            countPassed: 56,
            countFailed: 32,
            percentCovered: 73
        },
        functionalTests: {
            countPassed: 70,
            countFailed: 32,
            percentCovered: 89
        },
        '_id': '5a60aceb7c2sddwgrghtujwry'
    },

    {
        type: 'firewall',
        timeStarted: formattedDateService.getDateThenTimeSpaced(),
        owner: 'Youssef',
        name: 'e',
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
            date: formattedDateService.getTimeThenDashThenDate(),
        },
        unitTests: {
            countPassed: 56,
            countFailed: 32,
            percentCovered: 73
        },
        functionalTests: {
            countPassed: 70,
            countFailed: 32,
            percentCovered: 89
        },
        '_id': 'fdgykulrkyo5968'
    },


    {
        type: 'build',
        name: 'Tenrox-G6-8468',
        timeStarted: formattedDateService.getDateThenTimeSpaced(),
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
            date: formattedDateService.getTimeThenDashThenDate(),
        },
        unitTests: {
            countPassed: 5000,
            countFailed: 1,
            percentCovered: 73
        },
        functionalTests: {
            countPassed: 70,
            countFailed: 32,
            percentCovered: 89
        },
        '_id': '5a60aceb7c2ea1f5d9o1f'
    },

    {
        type: 'build',
        name: 'Tenrox-T7-8643',
        timeStarted: formattedDateService.getDateThenTimeSpaced(),
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
            date: formattedDateService.getTimeThenDashThenDate(),
        },
        unitTests: {
            countPassed: 5000,
            countFailed: 1,
            percentCovered: 73
        },
        functionalTests: {
            countPassed: 70,
            countFailed: 32,
            percentCovered: 89
        },
        '_id': '5a60acebs1f5d9o1f'
    },


    {
        type: 'firewall',
        timeStarted: formattedDateService.getDateThenTimeSpaced(),
        owner: 'Mcbride',
        name: 'f',
        metrics: {
            test: {
                value: 80,
                isPositive: true,
            },
            maintainability: {
                value: 50,
                isPositive: false,
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
        '_id': '5a60aceb1f5d9be231j'
    },


    {
        type: 'firewall',
        timeStarted: formattedDateService.getDateThenTimeSpaced(),
        owner: 'ER',
        name: 'g',
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
            date: formattedDateService.getTimeThenDashThenDate(),
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


    {
        type: 'firewall',
        timeStarted: formattedDateService.getDateThenTimeSpaced(),
        owner: 'ER',
        name: 'rfgre',
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
            date: formattedDateService.getTimeThenDashThenDate(),
        },
        unitTests: {
            countPassed: 40,
            countFailed: 60,
            percentCovered: 90
        },
        functionalTests: {
            countPassed: 540,
            countFailed: 43,
            percentCovered: 87
        },
        '_id': '5a60acb7c2ea1f5d9beyt'
    },


    {
        type: 'firewall',
        timeStarted: formattedDateService.getDateThenTimeSpaced(),
        owner: 'ER',
        name: 'H',
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
            date: formattedDateService.getTimeThenDashThenDate(),
        },
        unitTests: {
            countPassed: 400,
            countFailed: 60,
            percentCovered: 90
        },
        functionalTests: {
            countPassed: 43,
            countFailed: 46,
            percentCovered: 40
        },
        '_id': '5a60acb7c2eajgeyt'
    },

];


