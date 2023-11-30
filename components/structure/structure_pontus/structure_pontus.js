
function createStructure(parent) {

    let container = document.createElement('div'); {
        container.id = "#wrapper"
        parent.appendChild(container);
        container.innerHTML =
            `<header>
        </header>
        <main>
                <div class="left"></div>
                <div class="right"></div>
        </main>
        <footer></footer>`;
    };

    return {
        headerContainer: document.querySelector("header"),
        mainContainer: document.querySelector("main"),
        footerContainer: document.querySelector("footer"),
        selectorContainer: document.querySelector(".left"),
        gridContainer: document.querySelector(".right"),
    };
};
///

//const structure_elements = createStructure(document.body);


