// Cache the DOM
const btn = document.querySelector(".getData");
const sayingsDisplay = document.querySelector(".sayings");

// Listening to events
btn.addEventListener("click", fetchData);
fetchData();

//Fecth the Data
function fetchData() {
  fetch("https://sampleapis.com/futurama/characters")
    .then(res => res.json())
    .then(characters => {
      renderDisplay(characters);
    })
    .catch(err => console.log(err));
}

// Creating the view
function renderDisplay(characters) {
  sayingsDisplay.innerHTML = characters
    .map(character => {
      return `<ul>
        <li><span class="header">Name: </span>${getFullName(character)}</li>
        <li><span class="header">Sayings:</span> ${getRandomSaying(
          character
        )}</li>
    </ul>
    <hr/>`;
    })
    .join("");
}

// Building full name
function getFullName(character) {
  return `${character.name.first} ${character.name.last}`;
}

// Getting random saying
function getRandomSaying(character) {
  const characterSayingsLength = character.sayings.length;
  const randomIndex = Math.floor(Math.random() * characterSayingsLength);
  return character.sayings[randomIndex];
}
