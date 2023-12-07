function sabina_filter(unfilteredArray, x_minPrice, y_maxPrice) {

    let filteredArray = [];

    for (let shoe of unfilteredArray) {

        if (shoe.price >= x_minPrice &&
            shoe.price <= y_maxPrice) {
            filteredArray.push(shoe);
        }
    }

    return filteredArray;
}