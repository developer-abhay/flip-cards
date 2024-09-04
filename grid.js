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
const items = [];
for (let i = 0; i < gridSize * 2; i++) {
  const randomNum = Math.floor(Math.random() * gridSize * 2);

  //   if (!items.includes(images[randomNum])) {
  items.push(images[randomNum]);
  //   } else if (!items.includes(images[randomNum + 1])) {
  // items.push(images[randomNum + 1]);
  //   }
}

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
