function render_structure (parent)
{
  parent.innerHTML = `
    <header></header>
    <main>
      <div id="top"></div>
      <div id="bottom">
        <div id="bottom_left"></div>
        <div id="bottom_right"></div>
      </div>
    </main>
    <footer>
      <div id=footer_top></div>
      <div id=footer_bottom></div>
    </footer>
  `;

  return {
    header: parent.querySelector("header"),
    top: parent.querySelector("#top"),
    bottom_left: parent.querySelector("#bottom_left"),
    bottom_right: parent.querySelector("#bottom_right"),
    footer_top: parent.querySelector("#footer_top"),
    footer_bottom: parent.querySelector("#footer_bottom"),
  };
}