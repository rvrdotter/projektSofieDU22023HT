function filter_nikolina(array, min_price, max_price) {
    let filtered_array = [];
    for (let shoe of array) {
        if (shoe.price >= min_price && shoe.price <= max_price) {
            filtered_array.push(shoe);
        }
    }
    return array
}