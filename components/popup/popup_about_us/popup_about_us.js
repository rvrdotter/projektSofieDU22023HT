
//skapar container div och content div till about us popup

function create_popup_about_us(parent) {
    const container_div_about_us = document.createElement('div');
    const content_div_about_us = document.createElement('div');

    container_div_about_us.id = 'popup-container-about-us';
    content_div_about_us.id = 'popup-content-about-us';
    content_div_about_us.innerHTML = `
        <div id="team_photo"></div>
        <div id="team_text">Meet the team!</div>
    `;

    container_div_about_us.appendChild(content_div_about_us);
    parent.appendChild(container_div_about_us);

    // popup göms vid klick, på containern
    container_div_about_us.addEventListener('click', function() {
        container_div_about_us.style.display = 'none';
    })
}

// div_button ska vara referensen div-knappen som visar popup-en, finns i structure att hämta

function create_popup_about_us_clickhandler(div_button) {
    div_button.addEventListener('click', function() {
        const popup_container_div = document.querySelector('#popup-container-about-us');
        popup_container_div.style.display = 'flex';
    })
}