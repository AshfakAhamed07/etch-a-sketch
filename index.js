const controls = document.querySelector("#controls");
const button = document.createElement("button");
button.textContent = "New Grid";
button.className = "gridBtn";

button.addEventListener("click", () => {
  const userInput = prompt("Enter the number of squares per side (1–100):", 16);

  handleInput(userInput);
});

controls.appendChild(button);

const container = document.querySelector(".container");
const gridSize = 16;

generateGrid(gridSize);

function handleInput(input) {
  if (input === null) {
    return;
  }

  if (input.trim() === "" || isNaN(input)) {
    alert("Please Make your grid between 1 and 100");
    return;
  }

  const gridSize = Number(input);

  if (gridSize < 1 || gridSize > 100) {
    alert("Please Make your grid between 1 and 100");
    return;
  }

  generateGrid(gridSize);
}

function generateRandomColor(){
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    return `rgb(${r}, ${g}, ${b})`
}

function generateGrid(gridLength) {
  container.innerHTML = "";
  for (let i = 1; i <= gridLength * gridLength; i++) {
    const square = document.createElement("div");
    square.style.width = `${100 / gridLength}%`;
    square.style.height = `${100 / gridLength}%`;
    square.addEventListener("mouseover", function () {
      square.style.backgroundColor = generateRandomColor();
    });
    square.classList.add("square");
    container.appendChild(square);
  }
}
