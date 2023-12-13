
function render_modell_filter(parent) {

    const box = document.createElement("div");
    box.id = "modell_filter";
    parent.append(box);

    let text_modell = document.createElement("div");
    text_modell.innerHTML = `
    <div id="text"> Typ av sko</div>
    `;
    box.appendChild(text_modell);

    for (let modell of KINDS) {
        let modell_filter_button = document.createElement("div");
        modell_filter_button.classList.add("modell_container");
        modell_filter_button.innerHTML = `
         <div class="check_mark" ></div >
         <p class="modell_name">${modell.name}</p>
            `;
        box.appendChild(modell_filter_button);


        modell_filter_button.addEventListener("click", function () {
            modell_filter_button.classList.toggle("checked_modell");

        });

    }
}