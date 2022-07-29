// question 1
const filterOutOdds = (...args) => args.filter (v => v % 2 ===0);

// question 2
const findMin = (...args) => Math.min(...args)

// question 3
const mergeObject = (object1, object2) => ({...object1, ...object2})

// question 4
const doubleAndReturnArgs = (arr , ...args) => [...arr, ...args.map(v => v * 2)];

// question5
const removeRandom = items => {
    let idx = Math.floor(Math.random() * items.length);
    return [...items.slice(0,idx), ...items.slice(idx + 1)];
}

// question 6
const extend = (array1, array2) => {
    return [...array1, ...array2];
}

// question 7
const addKeyVal = (obj, key, val) => {
    let newObj = {...obj}
    newObj[key] = val;
    return newObj;
}

// question 8
const removeKey = (obj,key) => {
    let newObj = {...obj}
    delete newObj[key]
    return newObj;
}

// question 9
const combine = (obj1, obj2) => {
    return {...obj1, ...obj2}
}

// question 10
const update = (obj, key, val) => {
    let newObj = {...obj}
    newObj[key] = val;
    return newObj
}
