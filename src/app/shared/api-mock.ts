
// export const randomMockItem = (options = _options) => {
//     const types = Object.keys(options);
//     const type = types[random(types.length - 1)];

//     const option = options[type];

//     const states = option.states;
//     const state = states[random(states.length - 1)];

//     const id = `${option.idPrefix || ''}${option.idSeed + random(option.idMax || 1000)}`;

//     const owner = owners[random(owners.length - 1)];

//     return {
//         type,
//         state,
//         id,
//         owner,
//         started: randomDate(),
//         metrics: {
//             progress: {
//                 value: random(100),
//                 isPositive: true
//             },
//             test: {
//                 value: random(100),
//                 isPositive: true
//             },
//             maintainability: {
//                 value: random(100),
//                 isPositive: true
//             },
//             security: {
//                 value: random(100),
//                 isPositive: true
//             },
//             workmanship: {
//                 value: random(100),
//                 isPositive: true
//             }
//         },
//         buildDate: randomDate(),
//         unitTest: {
//             testsPassed: random(100),
//             testsFailed: random(100),
//             percentCovered: random(100),
//         },
//         functionalTest: {
//             testsPassed: random(100),
//             testsFailed: random(100),
//             percentCovered: random(100),
//         },
//     };
// };

