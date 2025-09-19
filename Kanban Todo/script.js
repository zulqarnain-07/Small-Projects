const taskinput = document.querySelector("#task-input")
const addtask = document.querySelector("#addtask")
const addTask=()=>{
    if (taskinput.value ==="") {return}
//<div class="card" draggable="true" >${taskinput.value}</div>
    const newCard = document.createElement("div")
    newCard.classList.add ("card")
    newCard.setAttribute ("draggable", "true")

    newCard.textContent = `${taskinput.value}`
    newCard.addEventListener("dragstart", dragStart);
    newCard.addEventListener("dragend", dragEnd);
  
    list1.appendChild(newCard)

    taskinput.value=""
}
const list1 = document.querySelector("#list1")
const cards = document.querySelectorAll(".card"); // draggable items
const lists = document.querySelectorAll(".list"); // dropzones

let draggedCard = null; // track which card is being dragged

// ===== CARD EVENTS =====
function dragStart(e) {
  draggedCard = this; // store the card being dragged
  setTimeout(() => this.style.display = "none", 0); // hide while dragging
}

function dragEnd(e) {
  this.style.display = "block"; // show again
  draggedCard = null;
}

// ===== LIST EVENTS =====
function dragOver(e) {
  e.preventDefault(); // allow dropping
}

function dragEnter(e) {
  e.preventDefault();
  this.classList.add("over"); // visual feedback
}

function dragLeave(e) {
  this.classList.remove("over");
}

function dragDrop(e) {
  this.classList.remove("over");
  if (draggedCard) {
    this.appendChild(draggedCard); // move the card
  }
}

// ===== ATTACH EVENTS =====
for (const card of cards) {
  card.addEventListener("dragstart", dragStart);
  card.addEventListener("dragend", dragEnd);
}

for (const list of lists) {
  list.addEventListener("dragover", dragOver);
  list.addEventListener("dragenter", dragEnter);
  list.addEventListener("dragleave", dragLeave);
  list.addEventListener("drop", dragDrop);
}
