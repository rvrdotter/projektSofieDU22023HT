
/* TEST HTML

body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
}

input[type="range"] {
    width: 300px;
    margin-right: 15px;
}
</style>
</head>
<body>

<h1>Shoe Filter</h1>

<label for="slider">Max Price: </label>
<input type="range" id="slider" min="0" max="100" value="50" step="1">
*/




let shoes = SHOES;

// assuming ID on max price slider is "slider". This function gets the value of the slider.
function getSliderValue() {
    let slider = document.getElementById("slider");
    let sliderValue = slider.value;
    return sliderValue;
}

//filter array by max price

function filterShoesByMaxPrice(array, maxPrice) {
    let tempByMaxPrice = [];
    for (let i = 0; i < array.length; i++) {
        let shoe = array[i];
        if (shoe.price <= maxPrice) {
            tempByMaxPrice.push(shoe);
        }
    }
    return tempByMaxPrice;
}

//eventListner for when the slider changes value and then calls upon filter functions

document.getElementById("slider").addEventListener("input", function () {
    let maxPrice = getSliderValue();
    let filteredShoesByMaxPrice = filterShoesByMaxPrice(shoes, maxPrice);
});








