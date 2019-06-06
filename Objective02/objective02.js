document
  .getElementById("getData")
  .addEventListener("click", futaramaProductSlogans);

function futaramaProductSlogans() {
  fetch("https://sampleapis.com/futurama/inventory")
    .then(res => res.json())
    .then(jsonData => {
      let output = "<h2>Futarama Product Slogans</h2>";

      jsonData.forEach(function(products) {
        const productTitle = products.title;
        const productSlogan = products.slogan;
        if (productTitle && productSlogan != "") {
          output += `
          <div class="carousel-item ">
          <ul >
          <li class="sloganStyle"><span class=header>Product: </span>${productTitle}</li>
          <li class="sloganStyle"><span class=header>Slogan: </span>${productSlogan}</li>
          </ul>
        </div>
          `;
        }
      });
      document.getElementById("slogan").innerHTML = output;
    })
    .catch(err => console.log(err));
}
