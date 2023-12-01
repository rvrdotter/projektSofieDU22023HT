function render_structure(parent) {

    parent.innerHTML = `
    <header>
      <h1> Choose your shoes </h1>
      <div id=biggest_image </div>
      <h2> Stride with pride:unleash your INNER <b>SHOE-TALITY</b></h2>
      <div id=images </div>
           <div>image 1</div>
           <div>image 2</div>
           <div>image 3</div>
      </div>
    </header>
    <main>
      <div id="top"></div>
        <div id="bottom"></div>
      </div>
    </main>

    <footer 
      <div id= first_footer </div>
      <div id= second_footer
        <li
            <ul></ul>
            <ul></ul>
            <ul></ul>
         </li>
       </div>
    </footer>
  `;

    return {
        header: parent.querySelector("header"),
        top: parent.querySelector("#top"),
        bottom: parent.querySelector("bottom"),
    };
}