document
  .getElementById("getData")
  .addEventListener("click", categorizedProducts);

function categorizedProducts() {
  fetch("https://sampleapis.com/futurama/inventory")
    .then(res => res.json())
    .then(jsonData => {
      let output = "<h2>Categorized Products</h2>";

      const categories = jsonData.map(item => {
        return item.category;
      });

      const categoriesUnique = categories.filter((item, index) => {
        return categories.indexOf(item) >= index;
      });

      for (let i = 0; i < categoriesUnique.length; i++) {
        const headerCategories = categoriesUnique[i];
        output += `
        <div class="grid-item" >
        ${headerCategories}<br>
       
      </div>
        `;
      }
      document.getElementById("grid").innerHTML = output;
    });
}
