export const firstChange = {
    isRunning: true,
    phase: 'metrics',
    percentCompleted: 80,
    '_id': '5a60aceb7c2ea1f5gh'
};


export const secondChange = {
    isRunning: true,
    phase: 'metrics',
    percentCompleted: 90,
    '_id': '5a60aceb7c2ea1f5gh'
};


export const thirdChange = {
    isRunning: true,
    phase: 'metrics',
    percentCompleted: 98,
    '_id': '5a60aceb7c2ea1f5gh'
};


export const fourthChange = {
    isRunning: true,
    phase: 'build',
    percentCompleted: 20,
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
    '_id': '5a60aceb7c2ea1f5gh'
};


export const fifthChange = {
    isRunning: true,
    phase: 'build',
    percentCompleted: 70,
    '_id': '5a60aceb7c2ea1f5gh'
};



export const sixthChange = {
    isRunning: true,
    phase: 'unitTests',
    percentCompleted: 40,
    build: {
        didDebugFailed: false,
        didReleaseFailed: false,
        date: '2014-12-20T01:52:46 -02:00',
    },
    '_id': '5a60aceb7c2ea1f5gh'
};


export const seventhChange = {
    isRunning: true,
    phase: 'unitTests',
    percentCompleted: 80,
    '_id': '5a60aceb7c2ea1f5gh'
};

export const eighthChange = {
    isRunning: true,
    phase: 'functionalTests',
    percentCompleted: 30,
    unitTests: {
        countPassed: 20,
        countFailed: 10,
        percentCovered: 30
    },
    '_id': '5a60aceb7c2ea1f5gh'
};

export const ninthChange = {
    isRunning: true,
    phase: 'functionalTests',
    percentCompleted: 90,
    '_id': '5a60aceb7c2ea1f5gh'
};


export const tenthChange = {
    functionalTests: {
        countPassed: 70,
        countFailed: 32,
        percentCovered: 89
    },
    '_id': '5a60aceb7c2ea1f5gh'
};
