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

const container = document.querySelector(".container");
const gridSize = 16;
const squareSize = 100 / gridSize;

for (let i = 1; i <= gridSize * gridSize; i++) {
  const square = document.createElement("div");
  square.style.width = `${squareSize}%`;
  square.style.height = `${squareSize}%`;
  square.addEventListener("mouseover", function () {
    square.style.backgroundColor = "red";
  });
  square.classList.add("square");
  container.appendChild(square);
}

const button = document.createElement("button");
button.textContent = "Change Grid Size";
button.classList.add = "gridBtn";
document.appendChild(button);
