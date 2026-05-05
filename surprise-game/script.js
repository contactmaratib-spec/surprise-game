// 🎁 Items (audio + image perfectly synced)
const items = [
  { name: "iPhone", img: "images/01.png", audio: "audio/01.mp3" },
  { name: "Thenga", img: "images/02.png", audio: "audio/02.mp3" },
  { name: "Danda", img: "images/03.png", audio: "audio/03.mp3" },
  { name: "Dandu", img: "images/04.png", audio: "audio/04.mp3" },
  { name: "Chocolate", img: "images/05.png", audio: "audio/05.mp3" },
  { name: "Gift", img: "images/06.png", audio: "audio/06.mp3" },
  { name: "Chipkali", img: "images/07.png", audio: "audio/07.mp3" },
  { name: "Flower", img: "images/08.png", audio: "audio/08.mp3" }
];

let shuffledItems = [];

const grid = document.getElementById("grid");

// 🔀 Shuffle Function
function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

// 🎮 Game Create
function createGame() {
  grid.innerHTML = "";
  shuffledItems = shuffle([...items]);

  shuffledItems.forEach((item, index) => {
    const box = document.createElement("div");
    box.classList.add("box");
    box.innerText = index + 1;

    box.dataset.opened = "false";

    box.addEventListener("click", () => {
      if (box.dataset.opened === "true") return;
      openBox(box, item);
    });

    grid.appendChild(box);
  });
}

// 📦 Open Box AFTER audio ends
function openBox(box, item) {
  box.dataset.opened = "true";
  box.innerText = "⏳";

  const audio = new Audio(item.audio);
  audio.play();

  // 🔥 BOX WILL OPEN AFTER AUDIO FINISHES
  audio.onended = () => {
    box.innerHTML = "";

    const img = document.createElement("img");
    img.src = item.img;

    box.appendChild(img);
  };
}

// 🔄 Shuffle Button
function shuffleGame() {
  createGame();
}

// 🚀 Start Game
createGame();