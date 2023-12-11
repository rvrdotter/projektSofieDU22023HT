
"use strict";

function render_shoe_list (parent, shoes) {
    const container = document.createElement("div");
    container.id = "shoe_list_container";
    parent.appendChild(container);

    update_shoe_list(shoes);
}

function update_shoe_list () {
    const container = document.querySelector("#shoe_list_container");
    const shoes = SHOES;

    for (let shoe of shoes) {
        render_shoe(container, shoe);
    }
}