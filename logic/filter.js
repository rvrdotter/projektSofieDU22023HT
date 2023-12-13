//the filter functions will be constructed as several different filters that are ran through
//by a series of if statements, how the css classes are defined and the html is constructed
//will be important for how it functions.

//test code for filters can be ignored
/*
let test = document.createElement("div");
test.innerHTML = `
    <div id="kindFilters">
        <div class="checked">
            <div class="text">Boots</div>
        </div>
    </div>
`;
document.body.appendChild(test);
let test2 = document.createElement("div");
test2.innerHTML = `
    <div class="checked">
        <div class="text">Sneakers</div>
    </div>
`;
document.querySelector("#kindFilters").appendChild(test2);
*/

//this fuction aims to select all filters that are checked and return true if there are any
//or false if there aren't any.
function filterData() {
    let selectedDataPoints = SHOES;
    if (probeFilters("modell")) {
        selectedDataPoints = filterByModell(selectedDataPoints);
    }
    if (probeFilters("country")) {
        selectedDataPoints = filterByCountry(selectedDataPoints);
    }
    selectedDataPoints = filterByPrice(selectedDataPoints);

    return selectedDataPoints;
}

function probeFilters(filter) {
    const checkedFilters = document.querySelectorAll(`#${filter}_filters .${filter}_checked`);
    return checkedFilters.length > 0;
}

//this function works and could be replicated to the filterByOrigin.
function filterByModell(data) {
    //gets the DOMs with .checked
    const checkedModellElements = document.querySelectorAll("#modell_filter .checked_modell .modell_name");
    const checkedModellNames = arrayTransform(checkedModellElements, function (element) {
        return element.textContent;
    });
    //uses names of the DOMs to get the KINDS object in question
    const checkedModellObjects = arrayTransform(checkedModellNames, function (modellName) {
        return arrayFind(KINDS, function (kind) {
            return kind.name === modellName;
        });
    });
    //gets IDs of kind objects in question
    const checkedModellIds = arrayTransform(checkedModellObjects, function (modellObject) {
        return modellObject.id;
    })

    //filters the data and get the shoe objects of the chosen kinds.
    data = arrayFilter(data, function (dataPoint) {
        return checkedModellIds.includes(dataPoint.kind_id);
    });
    return data;
}
function filterByCountry(data) {
    const checkedCountryElements = document.querySelectorAll("#country_filter .checked_country .country_name");
    const checkedCountryNames = arrayTransform(checkedCountryElements, function (element) {
        return element.textContent;
    });

    const checkedCountryObjects = arrayTransform(checkedCountryNames, function (countryName) {
        return arrayFind(COUNTRIES, function (country) {
            return country.name === countryName;
        });
    });

    const checkedCountryIds = arrayTransform(checkedCountryObjects, function (countryObject) {
        return countryObject.id;
    });

    data = arrayFilter(data, function (dataPoint) {
        return checkedCountryIds.includes(dataPoint.country_id);
    });


    return data;
}
function filterByPrice(data) {

    const maxPriceElement = document.querySelector("#productPrice");
    let maxPriceString = maxPriceElement.textContent;

    maxPriceString = maxPriceString.substring(0, maxPriceString.length - 3);// Get the first three characters
    const maxPrice = parseInt(maxPriceString);

    data = arrayFilter(data, function (dataPoint) {
        return dataPoint.price <= maxPrice;
    })

    return data;
}

