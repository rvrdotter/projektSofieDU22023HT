
"use strict";

function render_shoe (parent, shoe) {
    const container = document.createElement("div");
    container.classList.add("shoe_container");
    parent.appendChild(container);

    const image = array_find(SHOES, function(x) {return x.id === shoe.file_name});
    const title = array_find(SHOES, function(x) {return x.id === shoe.name});
    const type = array_find(SHOES, function(x) {return x.id === shoe.kind_id});
    const country = array_find(SHOES, function(x) {return x.id === shoe.country_id});
    const price = array_find(SHOES, function(x) {return x.id === shoe.price});

    container.innerHTML = `
        <img class="shoe_image" src="media/shoe_images/${image}">
        <p class ="shoe_title">${title}</p>
        <p class ="shoe_type">${type}</p>
        <p class ="shoe_country">${country}</p>
        <p class ="shoe_price">${price}</p>
    `;
}


