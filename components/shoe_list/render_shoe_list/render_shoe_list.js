
"use strict";

function render_shoe_list (parent, shoes) { // funktionen renderar containern till griden som alla skor ska vara i
    const container = document.createElement("div");
    container.id = "shoe_list_container";
    parent.appendChild(container);

    update_shoe_list(shoes);
}

function update_shoe_list () {
    const container = document.querySelector("#shoe_list_container");
    const shoes = filteredData(); // tar emot en filtrerad array av skor med dem skorna som uppfyller de ifyllda filternas krav

    for (let shoe of shoes) { // loopar igenom den filtrerade arrayen och renderar varje sko
        render_shoe(container, shoe);
    }
}