function render_price_filters (parent) {
   
    const priceContainer = document.createElement("div");
    priceContainer.id = "priceSliderContainer";
    parent.appendChild(priceContainer); 

    
    priceContainer.innerHTML = `
        <div id="text_maxPrice"> Maxpris </div>
        <div id="priceBox">
            <div id="productPrice"> 1000 :- </div>
        </div>
        <input type="range" id="maxPriceSlider" min="0" max="1000" value="1000">
    `;

    const productPrice = document.getElementById('productPrice');
    const maxPriceSlider = document.getElementById('maxPriceSlider');

   
    maxPriceSlider.addEventListener("input", function () {
        productPrice.textContent = `${maxPriceSlider.value} :- `;

    });
    
}