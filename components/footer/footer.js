function render_aboutUs(aboutUs) {
    
    aboutUs.innerHTML = `
        <div id="aboutUsButton">ABOUT US</div>
    `;
    return document.querySelector("#aboutUsButton");
}

function render_info(info) {
    
    info.innerHTML = `
    <div id="inforight">
        <div>FAQ</div>
        <div>Shipping</div>
        <div>Contact</div>
    </div>
    <div id=copyright>Choose Your Shoes©</div>
`;
}