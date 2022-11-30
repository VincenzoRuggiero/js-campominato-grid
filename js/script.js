// // Ciclo FOR per le 100 caselle
// Collego il container dei quadrati
let gridElem = document.getElementById("grid");

function createGrid() {
  for (i = 1; i <= 100; i++) {
    let squareElem = document.createElement("div");
    squareElem.classList.add("squareCSS");
    squareElem.innerHTML = i;
    gridElem.appendChild(squareElem);
  }

  return;
}
