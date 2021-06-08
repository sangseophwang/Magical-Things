const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greetUserName = document.querySelector("#greeting");
const greetUser = document.querySelector(".greetingUser");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "Name";

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreeting(username);
}

function paintGreeting(username) {
  const resetButton = document.createElement("button");
  resetButton.className = "resetBtn";
  resetButton.innerText = "🌷";
  greetUser.appendChild(resetButton);
  resetButton.addEventListener("click", handleReset);
  greetUserName.innerText = `Hello, ${username}`;
  greetUser.classList.remove(HIDDEN_CLASSNAME);
}

function handleReset(event) {
  greetUser.classList.add(HIDDEN_CLASSNAME);
  localStorage.removeItem(USERNAME_KEY);
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginInput.value = "";
  event.target.remove();
}

const savedName = localStorage.getItem(USERNAME_KEY);

if (savedName === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreeting(savedName);
}
