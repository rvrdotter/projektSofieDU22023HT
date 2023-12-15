function render_structure () {
    
    const container = document.querySelector("body");
    
    container.innerHTML = `
        <header></header>
        <main>
            <div id="filter"></div>
            <div id="products"></div>
        </main>
        <footer>
            <div id="aboutUs"></div>
            <div id="info"></div>
        </footer>
    `;

    return {
        header: document.querySelector("header"),
        filter: document.querySelector("#filter"),
        products: document.querySelector("#products"),
        aboutUs: document.querySelector("#aboutUs"),
        info: document.querySelector("#info"),
    }
}