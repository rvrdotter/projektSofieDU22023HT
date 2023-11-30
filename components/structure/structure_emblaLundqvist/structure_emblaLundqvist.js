function render_structure(parent)
{
    
    const structure = document.createElement("div");
    structure.innerHTML = `
        <header>
            <h1>Titel</h1>
        </header>

        <section id="hero_section"></section>
        <section id="slogan"></section>
        <section id="showcase"></section>

        <main>
            <div id="filter"></div>
            <div id="products"></div>
        </main>

        <footer>
            <div id="about_us"></div>
            <div id="bottom_sitemenu"></div>
        </footer>
    `;

    parent.appendChild(structure);

    return {
        header: document.querySelector("header"), 

        hero_section: document.querySelector("#hero_section"),
        slogan: document.querySelector("#slogan"),
        showcase: document.querySelector("showcase"),

        filter: document.querySelector("#filter"), 
        products: document.querySelector("#products"),

        about_us: document.querySelector("#about_us"), 
        bottom_sitemenu: document.querySelector("#bottom_sitemenu"),
    }
}

