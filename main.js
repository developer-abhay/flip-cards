import "./style.css";

const cards = document.querySelectorAll(".card");

// Event Listener
cards.forEach((card) => {
  card.addEventListener("click", () => {
    if (!card.classList.contains("flip")) {
      card.classList.add("flip");
      match();
      unflip();
    }
  });
});

// Match Values
const match = () => {
  const flipCards = document.querySelectorAll(".flip");
  console.log(flipCards);
  if (flipCards.length == 2) {
    const card1 = flipCards[0];
    const card2 = flipCards[1];
    const val1 = card1.children[0].innerHTML;
    const val2 = card2.children[0].innerHTML;

    if (val1 == val2) {
      setTimeout(() => {
        card1.style.visibility = "hidden";
        card2.style.visibility = "hidden";
      }, 400);
    }
  }
};

// Unflip
const unflip = () => {
  const flipCards = document.querySelectorAll(".flip");
  if (flipCards.length == 2) {
    setTimeout(() => {
      flipCards.forEach((card) => {
        card.classList.remove("flip");
      });
    }, 500);
  }

  if (flipCards.length > 2) {
    setTimeout(() => {
      flipCards.forEach((card) => {
        card.classList.remove("flip");
      });
    }, 150);
  }
};
