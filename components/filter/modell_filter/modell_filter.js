
function render_modell_filters(parent) {

    const box = document.createElement("div");
    box.id = "modell_filters";
    parent.append(box);

    let text_modell = document.createElement("div");
    text_modell.innerHTML = `
    <div id="text"> Typ av sko</div>
    `;
    box.appendChild(text_modell);

    for (let modell of KINDS) {
        let radio_knapp = document.createElement("div");
        radio_knapp.innerHTML = `
        <input type="radio" id="radio"></input>
        `;
        box.appendChild(radio_knapp);
        box.append(modell.name);

    }
}