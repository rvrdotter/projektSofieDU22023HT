function render_structure (parent)
{
  parent.innerHTML = `
    <header></header>
    <main>
      <div id="pictures"></div>
      <div id="shop_content">
        <div id="left"></div>
        <div id="right"></div>
      </div>
      <div id="about_us"></div>
    </main>
    <footer></footer>
  `;

  return {
    header: container.querySelector("header"),
    pictures: container.querySelector("#pictures"),
    shopContent: container.querySelector("#shop_content"),
    left: container.querySelector("#left"),
    right: container.querySelector("#right"),
    aboutUs: container.querySelector("#about_us"), 
    footer: container.querySelector("footer"),
  };
}