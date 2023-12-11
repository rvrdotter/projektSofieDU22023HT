function render_country_filter(parent) {

    const container = document.createElement("div");
    container.id = "country_filter";
    parent.append(container);

    let text_origin = document.createElement("div");
    text_origin.innerHTML = `
     <div id="text"> Tillverkningsland </div>
     `;
    container.appendChild(text_origin);



    for (let country of COUNTRIES) {
        let tempContainer = document.createElement("div");
        tempContainer.innerHTML = `
          <input type="radio" id="radio"> </input>
          `;
        container.appendChild(tempContainer);

        container.append(country.name);


    }
}