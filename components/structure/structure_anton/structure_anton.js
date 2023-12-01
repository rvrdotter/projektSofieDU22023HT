function render_structure (parent) 
{
  parent.innerHTML = `
    <header>
        <div id=title>Choose Your Shoes</div>
        <div id=topimg>
            <img src=../../media/images/going.jpg>
        </div>
        <div id=slogan>STRIDE WITH PRIDE: UNLEASH YOUR INNER <b>SHOE-TALITY</b></div>
        <div id=bottomimg>
            <img src=../../media/images/dancing_shoes.jpg>
            <img src=../../media/images/dancing_shoes_2.jpg>
            <img src=../../media/images/dancing_shoes_3.jpg>
        </div>
    </header>
    <main> 
        <div id="content">
            <div id="contentleft">Filters</div>
            <div id="contentright">Shoes Info and Images</div>
        </div>
        <div id="aboutus">
            <p>ABOUT US</p>
        </div>
    </main>
    <footer>
        <div id="bottomleft">
            <p>Copyright: Blah Blah</p>
        </div>
        <div id="bottomright">
            <p>FAQ</p>
            <p>Shipping</p>
            <p>Contact</p>
        </div>
    </footer>
    `;

    return {
        header: parent.querySelector("header"),
        title: parent.querySelector("#title"),
        topimg: parent.querySelector("#topimg"),
        slogan: parent.querySelector("#slogan"),
        bottomimg: parent.querySelector("#bottomimg"),
        main: parent.querySelector("main"),
        content: parent.querySelector("#content"),
        aboutus: parent.querySelector("#aboutus"),
        footer: parent.querySelector("footer"),
        bottomleft: parent.querySelector("#bottomleft"),
        bottomright: parent.querySelector("#bottomright"),
    };   
}