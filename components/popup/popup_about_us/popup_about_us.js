function create_popup_about_us(parent) {
    const container_div_about_us = document.createElement('div');
    const content_div_about_us = document.createElement('div');

    container_div_about_us.id = 'popup-container-about-us';
    content_div_about_us.id = 'popup-content-about-us';

    container_div_about_us.appendChild(content_div_about_us);
    parent.appendChild(container_div_about_us);

    container_div_about_us.addEventListener('click', function() {
        container_div_about_us.style.display = 'none';
    })
}


function create_popup_about_us_image(div_button) {
    div_button.addEventListener('click', function() {

        const popup_content_div = document.querySelector('#popup-content-about-us');
        popup_content_div.innerHTML = `
        <div></div>
        `;

        const popup_container_div = document.querySelector('#popup-container-about-us');
        popup_container_div.style.display = 'flex';
    })
}