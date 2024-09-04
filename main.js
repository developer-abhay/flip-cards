import "./style.css";

const flipTime = 1000;

const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
  card.addEventListener("click", () => {
    card.classList.add("flip");

    setTimeout(() => {
      card.classList.remove("flip");
    }, flipTime);
  });
});
