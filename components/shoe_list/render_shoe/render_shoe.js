
"use strict";

function render_shoe(parent, shoe) {
    const container = document.createElement("div");
    container.classList.add("shoe_container");
    parent.appendChild(container);

    // konstanter som innehåller vägen till värdet i databasen
    const image = shoe.file_name;
    const title = shoe.name;

    const country_object = arrayFind(COUNTRIES, function (country) { return country.id === shoe.country_id; });
    const country = country_object.name;

    const type_object = arrayFind(KINDS, function (kind) { return kind.id === shoe.kind_id; });
    const type = type_object.name;

    const price = shoe.price;

    container.innerHTML = `
        <img class="shoe_image" src="media/shoe_images/${image}">
        <p class ="shoe_title">${title}</p>
        <p class ="shoe_type">${type}</p>
        <p class ="shoe_country">${country}</p>
        <p class ="shoe_price">${price} kr</p>
    `; // skapar html strukturen och ger alla element klasser som sedan stylas i css
}

