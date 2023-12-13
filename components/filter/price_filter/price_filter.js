function render_price_filters (parent) {
   
    const priceContainer = document.createElement("div");
    priceContainer.id = "priceRangeSlider";
    parent.appendChild(priceContainer); 

    // input med type range är slidern 
    // minsta värde på slidern är 0 och maxiamala är 1000
    priceContainer.innerHTML = `
        <div id="text_maxPrice"> Maxpris </div>
        <div id="priceBox">
            <div id="productPrice"> 1000 :- </div>
        </div>
        <input type="range" id="maxPriceSlider" min="0" max="1000" value="1000">
    `;

    // Priset som ska synas i div lägger vi i en variabel productPrice
    // input range elementet = slidern lägger vi i en variabel maxPriceSlider
    const productPrice = document.getElementById('productPrice');
    const maxPriceSlider = document.getElementById('maxPriceSlider');

    // gör att priset förändras direkt när man förändrar i input range slidern
    // .addEventListerner("input", (event) -> function() gör att det sker direkt )
    maxPriceSlider.addEventListener("input", function () {
        productPrice.textContent = `${maxPriceSlider.value} :- `;

    });
    
}