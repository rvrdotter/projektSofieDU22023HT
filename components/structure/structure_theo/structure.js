
function render_structure (parent) {
  parent.innerHTML = `
    <header></header>
    <div id="top"></div>
    <main>
        <div id="left"></div>
        <div id="right"></div>
    </main>
    <footer></footer>
  `;

  return {
    header: parent.querySelector("header"),
    top: parent.querySelector("#top"),
    left: parent.querySelector("#left"),
    right: parent.querySelector("#right"),
    footer: parent.querySelector("footer"),
  };
}