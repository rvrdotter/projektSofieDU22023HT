function render_country_filter(parent) {

    const container = document.createElement("div");
    container.id = "country_filter";
    parent.append(container);

    let text_origin = document.createElement("div");
    text_origin.id = "text_origin";
    text_origin.innerHTML = `
     <div id="text"> Tillverkningsland </div>
     `;
    container.appendChild(text_origin);



    for (let country of COUNTRIES) {
        let country_filter_button = document.createElement("div");
        country_filter_button.classList.add("filter_container");
        country_filter_button.innerHTML = `
        <div class="check_mark"></div>
          <p class="country_name">${country.name}</p>
          `;
        container.appendChild(country_filter_button);


        country_filter_button.addEventListener("click", function () {
            country_filter_button.classList.toggle("checked_country");
            update_shoe_list();
        });

    }

}
