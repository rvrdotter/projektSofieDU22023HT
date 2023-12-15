const structure_containers = render_structure();
render_modell_filter(structure_containers.filter);
render_price_filters(structure_containers.filter);
render_country_filter(structure_containers.filter);

render_header(structure_containers.header);
const aboutUsButton = render_aboutUs(structure_containers.aboutUs);
create_popup_about_us(document.body);
create_popup_about_us_clickhandler(aboutUsButton);
render_info(structure_containers.info);
render_shoe_list(structure_containers.products);
