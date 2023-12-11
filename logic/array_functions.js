function arrayAvarage(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum = sum + array[i];
    }
    return round((sum / array.length), 2);
}

function arrayFind(array, fn) {
    for (let i = 0; i < array.length; i++) {
        if (fn(array[i]) === true)
            return array[i];
    }
}

function arrayFilter(array, fn) {
    let returnArray = [];
    for (let i = 0; i < array.length; i++) {
        if (fn(array[i]) === true)
            returnArray.push(array[i]);
    }
    return returnArray;
}

function arrayEach(array, fn) {
    for (let i = 0; i < array.length; i++) {
        fn(array[i]);
    }
}

function arrayTransform(array, fn) {
    let returnArray = [];
    for (let i = 0; i < array.length; i++) {
        returnArray.push(fn(array[i]));
    }
    return returnArray;
}