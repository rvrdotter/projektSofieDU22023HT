
"use strict";

function render_shoe (parent, shoe) {
    const container = document.createElement("div");
    container.classList.add("shoe_container");
    parent.appendChild(container);

    const image = shoe.file_name; 
    const title = shoe.name;
   
    const country_object = array_find(COUNTRIES, function (country) {return country.id === shoe.country_id;});
    const country = country_object.name;
   
    const type_object = array_find(KINDS, function (kind) {return kind.id === shoe.kind_id;});
    const type = type_object.name;
   
    const price = shoe.price;

    container.innerHTML = `
        <img class="shoe_image" src="media/shoe_images/${image}">
        <p class ="shoe_title">${title}</p>
        <p class ="shoe_type">${type}</p>
        <p class ="shoe_country">${country}</p>
        <p class ="shoe_price">${price} kr</p>
    `;
}

