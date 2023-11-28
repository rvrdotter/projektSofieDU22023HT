function render_structure(parent) {
    parent.innerHTML = `
        <header></header>
        <div id="top">
            <div id="text"></div>
            <div id="images"></div>
        </div>
        <div id="bottom">
            <div id="left></div>
            <div id="right"></div>
        </div>
        <footer>
            <div id="about"></div>
            <div id="info"></div>
        </footer>
    `
    return {
        header: parent.querySelector("header"),
        text: parent.querySelector("#text"),
        images: parent.querySelector("#images"),
        bottom_left: parent.querySelector("#left"),
        bottom_right: parent.querySelector("#right"),
        about: parent.querySelector("#about"),
        info: parent.querySelector("#info"),
    }
}