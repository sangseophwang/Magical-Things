const randomIcon = [
  { icon: "🌱" },
  { icon: "🐰" },
  { icon: "🧸" },
  { icon: "🎈" },
  { icon: "☘️" },
  { icon: "✨" },
  { icon: "🚀" },
  { icon: "🪄" },
  { icon: "🍒" },
  { icon: "⚡️" },
  { icon: "🌹" },
  { icon: "🍄" },
];

const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");
const toDoButton = document.querySelector(".todo-button");
const toDoMenu = document.querySelector(".todo");

let toDos = [];
const TODO_KEY = "To-Do";

function handleButtonClick() {
  toDoButton.classList.toggle("slideup");
  toDoMenu.classList.toggle("seek");
  toDoMenu.classList.toggle("hidden");
}

function paintToDo(newToDo) {
  const todayIcon = randomIcon[Math.floor(Math.random() * randomIcon.length)];
  const list = document.createElement("li");
  const newId = toDos.length + 1;
  list.id = newId;

  const span = document.createElement("span");
  span.innerText = `${todayIcon.icon}  ${newToDo}`;

  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("deleteButton");
  deleteBtn.addEventListener("click", deleteToDo);

  const deleteIcon = document.createElement("i");
  deleteIcon.setAttribute("class", "fas fa-check");

  list.appendChild(span);
  list.appendChild(deleteBtn);
  deleteBtn.appendChild(deleteIcon);
  toDoList.appendChild(list);
  list.style.marginBottom = "12px";

  const newToDoObj = {
    text: newToDo,
    id: newId,
  };

  toDos.push(newToDoObj);

  saveToDos();
}

function saveToDos() {
  localStorage.setItem(TODO_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
  const li = event.target.parentElement.parentElement;
  li.remove();

  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDos();
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newToDo = toDoInput.value;
  toDoInput.value = "";
  paintToDo(newToDo);
}

const savedToDos = localStorage.getItem(TODO_KEY);

toDoForm.addEventListener("submit", handleToDoSubmit);
toDoButton.addEventListener("click", handleButtonClick);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  parsedToDos.forEach(function (toDo) {
    paintToDo(toDo.text);
  });
}
