"use strict";

function emblaLundqvist_filter(unFilterdA, minPrice, maxPrice) {
    
    // return unFilterdA.filter((shoe) => { return shoe.price >= minPrice && shoe.price <= maxPrice })
        
    let filterdA = [];

    for (let shoe of unFilterdA) {
        if (shoe.price >= minPrice && shoe.price <= maxPrice) {
            filterdA.push(shoe)
        }
     }

    return filterdA;



    // for (let index = 0; index < unFilterdA.length; index++) {
    //     const shoe = unFilterdA[index]
        
    //     if (shoe.price >= minPrice && shoe.price <= maxPrice) {
    //         filterdA.push(shoe)
    //     }
    // }
}