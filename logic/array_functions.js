
function array_find (array, testFunction) {
    for (let element of array) {
        if (testFunction(element)) {
            return element;
        } 
    }
}