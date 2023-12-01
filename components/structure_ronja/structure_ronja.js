function render_structure(parent) {
    parent.innerHTML = `
        <header>
            <div id="title">
            </div>
            <div id="titleImg"></div>
        </header>
        <div id="subHead">
            <div id="subHeadTitle">
            </div>
            <div id="subHeadImg">
            </div>
        </div>
        <main>
            <div id="mainLeft">
            </div>
            <div id="mainRight">
            </div>
        </main>
        <footer>
            <div id="footTop"></div>
            <div id="footBtm"></div>
        </footer>
    `

    return {
        title: parent.querySelector("#title"),
        titleImg: parent.querySelector("#titleImg"),
        subHeadTitle: parent.querySelector("#subHeadTitle"),
        subHeadImg: parent.querySelector("#subHeadImg"),
        mainLeft: parent.querySelector("#mainLeft"),
        mainRight: parent.querySelector("#mainRight"),
        footTop: parent.querySelector("#footTop"),
        footBtm: parent.querySelector("#footBtm"),
    }
}