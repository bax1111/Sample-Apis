document.getElementById("getData").addEventListener("click", futaramaSayings);

function futaramaSayings() {
  fetch("https://sampleapis.com/futurama/characters")
    .then(res => res.json())
    .then(jsonData => {
      let output = "<h2>Futarama Character Random Sayings Generator</h2>";

      jsonData.forEach(function(characters) {
        const characterSayingsLength = characters.sayings.length;
        const randomIndex = Math.floor(Math.random() * characterSayingsLength);
        const randomSaying = characters.sayings[randomIndex];
        output += `
          <ul>
          <li><span class=header>Name:</span> ${characters.name.first} ${
          characters.name.last
        }</li>
          <li><span class=header>Sayings:</span> ${randomSaying}</li>
          <hr>
          </ul>
          `;
      });
      document.getElementById("grid-item").innerHTML = output;
    })
    .catch(err => console.log(err));
}
