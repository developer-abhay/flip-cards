const container = document.querySelector(".card-container");

const images = [
  { imgSrc: "/alien.png", name: "alien" },
  { imgSrc: "/blue.png", name: "blue" },
  { imgSrc: "/boy.png", name: "boy" },
  { imgSrc: "/brutus.png", name: "brutus" },
  { imgSrc: "/cartoon.png", name: "cartoon" },
  { imgSrc: "/daphne.png", name: "daphne" },
  { imgSrc: "/fred.png", name: "fred" },
  { imgSrc: "/garnet.png", name: "garnet" },
  { imgSrc: "/greg.png", name: "greg" },
  { imgSrc: "/helper.png", name: "helper" },
  { imgSrc: "/jake.png", name: "jake" },
  { imgSrc: "/jerry.png", name: "jerry" },
  { imgSrc: "/koya.png", name: "koya" },
  { imgSrc: "/mickey.png", name: "mickey" },
  { imgSrc: "/morty.png", name: "morty" },
  { imgSrc: "/plush.png", name: "plush" },
  { imgSrc: "/popeye.png", name: "popeye" },
  { imgSrc: "/rick.png", name: "rick" },
  { imgSrc: "/scooby.png", name: "scooby" },
  { imgSrc: "/shaggy.png", name: "shaggy" },
  { imgSrc: "/sonic.png", name: "sonic" },
  { imgSrc: "/teddy.png", name: "teddy" },
  { imgSrc: "/toroto.png", name: "toroto" },
  { imgSrc: "/transformer.png", name: "transformer" },
];

const createDiv = (item) => {
  const { imgSrc, name } = item;
  return `<div class="card" data-name='${name}'>
                <div class="front"> 
                    <img src=${imgSrc} />
                </div>
            </div>`;
};

const gridSize = 4;
container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;

// Selecting from image array
let tempImg = [...images];
const items = [];

for (let i = 0; i < (gridSize * gridSize) / 2; i++) {
  const randomNum = Math.floor(Math.random() * tempImg.length);

  items.push(tempImg[randomNum]);
  tempImg = tempImg.filter((item) => {
    return item.name !== tempImg[randomNum].name;
  });
  console.log(tempImg);
}

console.log(items);

// Shuffling and rendering the final items
const finalItems = [...items, ...items];

for (let i = 0; i < finalItems.length; i++) {
  const randomNum = Math.floor(Math.random() * finalItems.length);
  const temp = finalItems[randomNum];
  finalItems[randomNum] = finalItems[i];
  finalItems[i] = temp;
}

finalItems.forEach((item) => {
  container.innerHTML += createDiv(item);
});
