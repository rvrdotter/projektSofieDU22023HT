function render_structure(parent) {
    parent.innerHTML = `
    <header></header>
    <main>
      <div id="left">
        <div id="left-top"></div>
        <div id="left-middle"></div>
        <div id="left-bottom"></div>
      </div>
      <div id="right">
    </main>
    <footer></footer>
  `;

    return {
        header: parent.querySelector("header"),
        left: parent.querySelector("#left"),
        right_top: parent.querySelector("#right"),
        right_bottom: parent.querySelector("footer"),
    };
}