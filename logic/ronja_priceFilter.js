function minMaxPriceFilter(array, min, max) {
    let filteredArray = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i].price <= max && array[i].price >= min) {
            filteredArray.push(array[i]);
        }
    }
    return filteredArray;
}