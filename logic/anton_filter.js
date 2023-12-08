"use strict";

function anton_filter (array, min, max) {
    let filteredArray = [];
    for (let shoe of array) {
        if (shoe.price >= min && shoe.price <= max) {
            filteredArray.push(shoe);
        }
    }
    return filteredArray;
}