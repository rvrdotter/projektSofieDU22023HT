function render_country_filter(parent) {
    const container = document.createElement("div");
    container.id = "country_filter";
    parent.append(container);

    for (let country of COUNTRIES) {
        render_filter_element(container, country.name);
    }
}