const sloganDisplay = document.querySelector(".slogan");

function getProducts() {
  fetch("https://sampleapis.com/futurama/inventory")
    .then(res => res.json())
    .then(data => {
      renderDisplay(data);
    })
    .catch(err => console.log(err));
}

function renderDisplay(data) {
  const hasSlogan = data.filter(d => d.slogan);

  sloganDisplay.innerHTML = hasSlogan
    .map(item => {
      return `<div class="carousel-item justify-content-center">
      <p class="sloganStyle"><span class=header>Product: </span>${
        item.title
      }<br>
      <span class=header>Slogan: </span>${item.slogan}</p>
    </div>`;
    })
    .join("");
}

getProducts();
