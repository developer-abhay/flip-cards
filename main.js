import { images } from "./data";
import "./style.css";

let firstCard;
let secondCard;
let pauseGame = false;

const gridSize = 4;
let tempImg = [...images];
const items = [];

const container = document.querySelector(".card-container");
container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;

// Selecting from image array for custom grid
for (let i = 0; i < (gridSize * gridSize) / 2; i++) {
  const randomNum = Math.floor(Math.random() * tempImg.length);

  items.push(tempImg[randomNum]);
  tempImg = tempImg.filter((item) => {
    return item.name !== tempImg[randomNum].name;
  });
}

// Shuffling and rendering the final items
const finalItems = [...items, ...items];

for (let i = 0; i < finalItems.length; i++) {
  const randomNum = Math.floor(Math.random() * finalItems.length);
  const temp = finalItems[randomNum];
  finalItems[randomNum] = finalItems[i];
  finalItems[i] = temp;
}

// Or using array.sort
// finalItems.sort(() => {
//   return Math.random() - 0.5;
// });

finalItems.forEach((item) => {
  container.appendChild(createDiv(item));
});

// Create a new card
function createDiv(item) {
  const { imgSrc, name } = item;
  const card = document.createElement("div");

  card.classList.add("card");
  card.setAttribute("data-name", name);
  card.addEventListener("click", flip);

  card.innerHTML = `<div class="front">
                  <img src=${imgSrc} />
                </div>`;

  return card;
}

// Flip Card
function flip() {
  if (this == firstCard || this == secondCard) {
    return;
  }

  if (pauseGame) {
    // To vibrate 3+ cards and not flip them
    this.classList.add("vibrate");
    this.removeEventListener("click", flip);
    setTimeout(() => {
      this.classList.remove("vibrate");
      this.addEventListener("click", flip);
    }, 200);

    return;
  }

  if (!firstCard) {
    firstCard = this;
    this.classList.add("flip");
  } else {
    secondCard = this;
    this.classList.add("flip");
    match();
  }
}

// Match Values
function match() {
  pauseGame = true;

  const val1 = firstCard.dataset.name;
  const val2 = secondCard.dataset.name;

  if (val1 == val2) {
    setTimeout(() => {
      firstCard.style.visibility = "hidden";
      secondCard.style.visibility = "hidden";
    }, 300);
  }
  unflip();
}

// Unflip
const unflip = () => {
  setTimeout(() => {
    firstCard.classList.remove("flip");
    secondCard.classList.remove("flip");
    pauseGame = false;
    firstCard = null;
    secondCard = null;
  }, 350);
};

// https://icons8.com/
