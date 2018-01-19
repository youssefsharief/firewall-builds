export const firstChange = {
    'state': 'running',
    'runningState': {
        phase: 'metrics',
        percentCompleted: 80
    },
    '_id': '5a60aceb7c2ea1f5d9be231a'
};


export const secondChange = {
    'state': 'running',
    'runningState': {
        phase: 'metrics',
        percentCompleted: 90
    },
    '_id': '5a60aceb7c2ea1f5d9be231a'
};


export const thirdChange = {
    'state': 'running',
    'runningState': {
        phase: 'metrics',
        percentCompleted: 98
    },
    '_id': '5a60aceb7c2ea1f5d9be231a'
};


export const fourthChange = {
    'state': 'accepted',
    'metrics': {
        test: {
            value: 80,
            isPositive: true
        },
        maintainability: {
            value: 87,
            isPositive: true
        },
        security: {
            value: 90,
        },
        workmanship: {
            value: 97,
        },
    },
    buildDate: Date.now().toString(),
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
    '_id': '5a60aceb7c2ea1f5d9be231a'
};
