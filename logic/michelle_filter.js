"use strict";

function michelle_filter (unfiltered, x_minPrice, y_maxPrice) {

    let filtered = [];

    for (let product of unfiltered) {

        if (product.price >= x_minPrice && 
            product.price <= y_maxPrice) {
            filtered.push(product);
        }
    }

    return filtered;
}