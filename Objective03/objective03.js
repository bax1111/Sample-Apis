const categoryDisplay = document.querySelector(".grid-container");

// Fetch Data
function inventoryData() {
  fetch("https://sampleapis.com/futurama/inventory")
    .then(res => res.json())
    .then(data => {
      inventory(data);
    })
    .catch(err => console.log(err));
}

// Display all of the unique categories
function inventory(data) {
  const categoriesUnique = data.filter(
    (item, index) => data.indexOf(item) >= index
  );

  const categories = categoriesUnique
    .map(d => {
      return `
      <div class="grid-item" >
      <span class="header">Category:</span> ${d.category}<br>
      <span class="header">Product:</span> ${d.title}
      </div>
      `;
    })
    .sort()
    .join("");

  categoryDisplay.innerHTML = categories;
}

inventoryData();
