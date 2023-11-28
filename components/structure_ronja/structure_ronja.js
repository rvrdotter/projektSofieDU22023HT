function render_structure(parent) {
    parent.innerHTML = `
        <header>
            <div id="title">
                <h1>CHOOSE YOUR SHOES</h1>
            </div>
            <div id="titleImg"></div>
        </header>
        <div id="subHead">
            <div id="subHeadTitle">
                <h2>STRIDE WITH PRIDE: UNLEASH YOUR INNER <b>SHOE-TALITY</b></h2>
            </div>
            <div id="subHeadImg">
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
        <main>
            <div id="mainLeft">
                <ul>
                    <li>filters</li>
                    <li>filters</li>
                    <li>filters</li>
                </ul>
            </div>
            <div id="mainRight">
                <h2>SHOOOOES</h2>
            </div>
        </main>
        <footer>
            <div id="footTop">ABOUT US</div>
            <div id="footBtm">INFO FAQ ETC</div>
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