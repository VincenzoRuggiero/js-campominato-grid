let gridElem = document.querySelector(".grid");
let buttonElem = document.querySelector(".btn");

function createGrid() {
  for (i = 1; i <= 100; i++) {
    let squareElem = document.createElement("div");
    squareElem.classList.add("squareCSS");
    squareElem.innerHTML = i;
    gridElem.appendChild(squareElem);
  }

  return;
}

buttonElem.addEventListener("click", function () {
  gridElem.innerHTML = "";

  createGrid();
});
