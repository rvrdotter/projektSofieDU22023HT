function create_popup_about_us(parent){
    const container_div_about_us = document.createElement('div');
    const content_div_about_us = document.createElement('div');

    container_div_about_us.id = 'popup-container-about-us';
    content_div_about_us.id = 'popup-content-about-us';

    container_div_about_us.appendChild(content_div_about_us);
    parent.appendChild(container_div_about_us);
}