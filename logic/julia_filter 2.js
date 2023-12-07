"use strict";

function filter_julia (unfilteredArray, x, y) {
    let filteredArray = [];
    for (let shoe of unfilteredArray) {
        if(shoe.price >= x && shoe.price <= y) {
            filteredArray.push(shoe);
        }
    }
    return filteredArray;
}