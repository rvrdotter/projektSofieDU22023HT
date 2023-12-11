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
    if (probeFilters("kinds")) {
        selectedDataPoints = filterByKinds(selectedDataPoints);
    }
    if (probeFilters("origin")) {
        selectedDataPoints = filterByOrigin(selectedDataPoints);
    }
    if (probeFilters("price")) {
        selectedDataPoints = filterByPrice(selectedDataPoints);
    }
    return selectedDataPoints;
}

function probeFilters(filter) {
    const checkedFilters = document.querySelectorAll(`#${filter}Filters .checked`);
    return checkedFilters.length > 0;
}

//this function works and could be replicated to the filterByOrigin.
function filterByKinds(data) {
    //gets the DOMs with .checked
    const checkedKindElements = document.querySelectorAll("#kindFilters .checked .text");
    const checkedKindNames = arrayTransform(checkedKindElements, function (element) {
        return element.textContent;
    });
    //uses names of the DOMs to get the KINDS object in question
    const checkedKindObjects = arrayTransform(checkedKindNames, function (kindName) {
        return arrayFind(KINDS, function (kind) {
            return kind.name === kindName;
        });
    });
    //gets IDs of kind objects in question
    const checkedKindIds = arrayTransform(checkedKindObjects, function (kindObject) {
        return kindObject.id;
    })

    //filters the data and get the shoe objects of the chosen kinds.
    data = arrayFilter(data, function (dataPoint) {
        return checkedKindIds.includes(dataPoint.kind_id);
    });
    return data;
}
function filterByOrigin(data) {

}
function filterByPrice(data) {

}
