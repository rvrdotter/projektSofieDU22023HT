function adrian_filter(array, x, y) {
    let newFilteredArray = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i].price >= x && array[i].price <= y) {
            newFilteredArray.push(array[i])
        }
    }
    return newFilteredArray
}

adrian_filter(SHOES, 0, 500)