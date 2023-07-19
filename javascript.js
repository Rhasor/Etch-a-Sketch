let color = "black";
let click = true;

// Design of board
function populateBoard(size) {
  let board = document.querySelector(".board");
  let squares = board.querySelectorAll("div");
  squares.forEach((div) => div.remove());
  board.style.gridTemplateColumns = `repeat(${size} , 1fr)`;
  board.style.gridTemplateRows = `repeat(${size} , 1fr)`;

  let amount = size * size;
  for (let i = 0; i < amount; i++) {
    let square = document.createElement("div");
    square.addEventListener("mouseover", colorSquare);
    square.style.backgroundColor = "white";
    board.insertAdjacentElement("beforeend", square);
  }
}
populateBoard(100);

//Size board editor and limit
function changeSize(input) {
  if (input >= 2 && input <= 100) {
    document.querySelector(".error").style.display = "none";
    populateBoard(input);
  } else {
    document.querySelector(".error").style.display = "flex";
  }
}

//Background color of buttons
function colorSquare() {
  if (click) {
    if (color === "random") {
      this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    } else {
      this.style.backgroundColor = color;
    }
  }
}
function changeColor(choice) {
  color = choice;
}

// Reset bottom functionality
function resetBoard() {
  let board = document.querySelector(".board");
  let squares = board.querySelectorAll("div");
  squares.forEach((div) => (div.style.backgroundColor = "white"));
}

// Update the mode "Coloring"/"Not Coloring"
document.querySelector("body").addEventListener("click", (e) => {
  if (e.target.tagName != "BUTTON") {
    click = !click;
    if (click) {
      document.querySelector(".mode").textContent = "Coloring";
    } else {
      document.querySelector(".mode").textContent = "Not Coloring";
    }
  }
});

// Add the color picker functionality
const colorPickerButton = document.querySelector('.color-picker-button');
const colorPickerContainer = document.querySelector('.color-picker-container');
const colorPicker = document.querySelector('.color-picker');

// Show the color picker container when the button is clicked
colorPickerButton.addEventListener('click', () => {
  colorPickerContainer.style.display = 'block';
});

// Update the color variable with the selected color from the color picker
colorPicker.addEventListener('change', () => {
  color = colorPicker.value;
  colorPickerContainer.style.display = 'none';
});


