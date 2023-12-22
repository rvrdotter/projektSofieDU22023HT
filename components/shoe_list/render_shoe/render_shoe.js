
"use strict";

function render_shoe(parent, shoe) {
    const container = document.createElement("div");
    container.classList.add("shoe_container");
    parent.appendChild(container);

    container.addEventListener("click", function render_shoe_popup (event) {
        const create_invis_box = document.createElement("div");
        const create_popup_box = document.createElement("div");
        create_invis_box.id = 'popup-container-shoe';
        create_popup_box.id = 'popup-content-shoe';
        document.body.appendChild(create_invis_box);
        create_invis_box.appendChild(create_popup_box);

        let filtered_reviews = arrayFilter(REVIEWS, function(x) {
            return x.shoe_id === shoe.id
        })

        let review_scores = arrayTransform(filtered_reviews, function (x) {
            return x.score
        });

        let review_average = arrayAverage(review_scores)

        create_popup_box.innerHTML = `
        <div id="container">
            <div id="top_left">
                <p><b>${type}</b></p>
                <p><b>Details:</b> ${title}</p>
                <p><b>Made in:</b> ${country}</p>
                <p><b>Price:</b> ${price} kr</p>
                <p>Average Score: ${review_average}</p>
            </div>
            <div id="top_right">
            <img src="media/shoe_images/${image}">
            </div>
        </div>
        <div id="bottom">
        </div>
        `;
        

        for (let i = 0; i < filtered_reviews.length; i++) {
            let bottom_div = document.createElement("div") 
            let bottom = document.querySelector("#bottom")
            bottom.appendChild(bottom_div)
            bottom_div.classList.add("review")
            bottom_div.innerHTML = `
            <h3>Score: ${filtered_reviews[i].score}/5</h3>
            `
            if (filtered_reviews[i].rev) {
                bottom_div.innerHTML = `
                <h3>Score: ${filtered_reviews[i].score}/5</h3>
                <p>Comments: ${filtered_reviews[i].rev}</p>
                `
            }
        }
        
        create_invis_box.addEventListener("click", function (event) {
            create_popup_box.remove();
            create_invis_box.remove();
        })
    });

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

