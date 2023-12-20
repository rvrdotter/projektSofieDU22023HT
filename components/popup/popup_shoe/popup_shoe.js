function create_popup_shoe(parent) {
    const container_div_shoe = document.createElement('div');
    const content_div_shoe = document.createElement('div');

    container_div_shoe.id = 'popup-container-shoe';
    content_div_shoe.id = 'popup-content-shoe';
    content_div_shoe.innerHTML = `
        <div id="top_left">
            <p><b>${SHOES.kind_id == KINDS.id}</p>
            <p>Made in:${SHOES.country_id == COUNTRIES.id}</p>
            <p>Price: ${SHOES.price}</p>
            
        </div>
        <div id="top_right"></div>
    `;

    container_div_shoe.appendChild(content_div_shoe);
    parent.appendChild(container_div_shoe);

    // popup göms vid klick, på containern
    container_div_shoe.addEventListener('click', function() {
        container_div_shoe.style.display = 'none';
    })
}


