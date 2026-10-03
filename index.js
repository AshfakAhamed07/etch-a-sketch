// 1. Create a square using JavaScript createElement()
// 2. Add the square to the container using appendChild()
// 3. Create multiple squares to form the grid
// 4. Use CSS Flexbox to arrange the squares into a grid
// 5. Add a mouseover event to each square
//    → Change the square's color when the mouse moves over it
// 6. Add a button for creating a new grid
// 7. Ask the user for the number of squares per side
// 8. Validate the user's input
//    → Make sure it is between 1 and 100
// 9. Remove the existing grid
// 10. Generate the new grid with the requested size

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

function generateGrid(gridLength) {
  container.innerHTML = "";
  for (let i = 1; i <= gridLength * gridLength; i++) {
    const square = document.createElement("div");
    square.style.width = `${100 / gridLength}%`;
    square.style.height = `${100 / gridLength}%`;
    square.addEventListener("mouseover", function () {
      square.style.backgroundColor = "red";
    });
    square.classList.add("square");
    container.appendChild(square);
  }
}
